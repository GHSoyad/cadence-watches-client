import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState(null);
    const [userLoading, setUserLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUserInfo(currentUser);
            setUserLoading(false);
        })

        return () => unsubscribe();
    }, [setUserLoading])

    const authInfo = {
        userInfo,
        setUserInfo,
        createUser,
        signInWithEmail,
        signOutUser,
        updateUserProfile,
        userLoading,
        setUserLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
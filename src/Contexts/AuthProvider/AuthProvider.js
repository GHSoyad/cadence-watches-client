import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../Firebase/firebase.config';
import useRole from '../../Hooks/useRole';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [currentUserEmail, setCurrentUserEmail] = useState('')
    const [role] = useRole(currentUserEmail);

    const createUser = (email, password) => {
        setUserLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        localStorage.removeItem('cadenceSecretToken');
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const signInWithGoogle = () => {
        setUserLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setCurrentUserEmail(currentUser?.email);
            const user = { ...currentUser, role };
            setUserInfo(user);
            setUserLoading(false);
        })

        return () => unsubscribe();
    }, [setUserLoading, role])

    const authInfo = {
        userInfo,
        setUserInfo,
        createUser,
        signInWithEmail,
        signOutUser,
        updateUserProfile,
        userLoading,
        setUserLoading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
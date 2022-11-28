import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useToken from '../Hooks/useToken';

const GoogleSignIn = ({ from, formLoading, setFormLoading }) => {

    const { signInWithGoogle, setUserInfo, setUserLoading } = useContext(AuthContext);
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            toast.success('Logged in successfully.');
            navigate(from || '/', { replace: true });
        }
    }, [token, navigate, from])

    const handleGoogleSignIn = () => {
        setFormLoading(true);
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const role = 'buyer';
                const currentUser = { ...user, role };
                setUserInfo(currentUser);
                saveUserInfo(user.displayName, user.email);
            })
            .catch(error => toast.error(error.message))
            .finally(() => {
                setUserLoading(false);
                setFormLoading(false);
            })
    }

    const saveUserInfo = (name, email) => {
        const user = {
            name,
            email,
            role: 'buyer'
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoginEmail(email);
                    setFormLoading(false);
                }
            })
            .catch(error => toast.error(error.message))
    }

    return <button onClick={handleGoogleSignIn} className='btn btn-neutral-content hover:glass border-0 mt-2 w-full' disabled={formLoading} >Continue with Google</button>
};

export default GoogleSignIn;
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import GoogleSignIn from '../../Firebase/GoogleSignIn';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const { signInWithEmail, setUserInfo, setUserLoading } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail);

    useEffect(() => {
        if (token) {
            toast.success('Logged in successfully.');
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const handleForm = (data) => {
        const email = data.email;
        const password = data.password;

        signInWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;

                fetch(`http://localhost:5000/user?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.role) {
                            const role = data.role;
                            const currentUser = { ...user, role };
                            setUserInfo(currentUser);
                            setLoginEmail(user.email);
                        }
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => toast.error(error.message))
            .finally(() => setUserLoading(false))
    }

    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 flex justify-center mt-20'>
            <div className='max-w-md p-6 border border-neutral-content rounded-lg flex-1'>
                <form onSubmit={handleSubmit(handleForm)} className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-medium text-center'>Login</h1>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input {...register('password')} type="password" placeholder="Your Password" className="input input-bordered w-full" />
                    </div>
                    <button className='btn btn-neutral-content hover:glass border-0 mt-4'>Login</button>
                    <p className='text-sm text-center'>Don't Have an Account? <Link to='/register' className='font-bold text-base hover:underline'>Register</Link></p>
                </form>
                <div className="divider">OR</div>
                <GoogleSignIn from={from}></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;
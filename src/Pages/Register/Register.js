import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, setUserInfo } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleForm = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = data.role;

        createUser(email, password)
            .then(userCredential => {
                setUserInfo(userCredential.user);
                saveUserInfo(name, email, role);
            })
            .catch(error => toast.error(error.message))
    }

    const saveUserInfo = (name, email, role) => {
        const user = {
            name,
            email,
            role
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
                if (data.acknowledged) {
                    toast.success('Registered successfully.')
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='container mx-auto max-w-screen-lg px-2 md:px-4 xl:px-0 flex justify-center mt-20'>
            <form onSubmit={handleSubmit(handleForm)} className='max-w-md p-6 border border-neutral-content rounded-lg flex-1 flex flex-col gap-4'>
                <h1 className='text-2xl font-medium text-center'>Register</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Full Name</span>
                    </label>
                    <input {...register('name')} type="text" placeholder="Your Full Name" className="input input-bordered border-2 w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input {...register('email')} type="email" placeholder="Your Email" className="input input-bordered border-2 w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Password</span>
                    </label>
                    <input {...register('password', {
                        required: 'Password is required.',
                        minLength: {
                            value: 6,
                            message: 'Password must be 6 characters long.'
                        },
                        pattern: {
                            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                            message: 'Password must contain a Uppercase, Lowercase and a digit.'
                        }

                    })} type="password" placeholder="Your Password" className="input input-bordered border-2 w-full" required />
                </div>
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text font-medium">What do you want to do?</span>
                    </label>
                    <select {...register('role')} className="select select-bordered border-2 w-full" required>
                        <option value='buyer'>Buyer ( I want to buy )</option>
                        <option value='seller'>Seller ( I want to sell )</option>
                    </select>
                </div>
                {
                    errors.password && <p className='text-sm text-red-500'>{errors.password?.message}</p>
                }
                <button type='submit' className='btn btn-neutral-content hover:glass border-0 mt-2'>Register</button>
                <p className='text-sm text-center'>Already Have an Account? <Link to='/login' className='font-bold text-base hover:underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;
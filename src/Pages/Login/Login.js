import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto max-w-screen-lg px-2 md:px-4 xl:px-0 flex justify-center mt-20'>
            <form className='max-w-md p-6 border border-neutral-content rounded-lg flex-1 flex flex-col gap-4'>
                <h1 className='text-2xl font-medium text-center'>Login</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="Your Password" className="input input-bordered w-full" />
                </div>
                <button className='btn btn-neutral-content hover:glass border-0 mt-4'>Login</button>
                <p className='text-sm'>Don't Have an Account? <Link to='/register' className='font-bold text-base hover:underline'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container mx-auto max-w-screen-lg px-2 md:px-4 xl:px-0 flex justify-center mt-20'>
            <form className='max-w-md p-6 border border-neutral-content rounded-lg flex-1 flex flex-col gap-4'>
                <h1 className='text-2xl font-medium text-center'>Register</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Full Name</span>
                    </label>
                    <input type="text" placeholder="Your Email" className="input input-bordered border-2 w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered border-2 w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="Your Password" className="input input-bordered border-2 w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">What do you want to do?</span>
                    </label>
                    <select className="select select-bordered border-2 w-full">
                        <option value='buyer'>Buyer ( I want to buy )</option>
                        <option value='seller'>Seller ( I want to sell )</option>
                    </select>
                </div>
                <button className='btn btn-neutral-content hover:glass border-0 mt-4'>Register</button>
                <p className='text-sm'>Already Have an Account? <Link to='/login' className='font-bold text-base hover:underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;
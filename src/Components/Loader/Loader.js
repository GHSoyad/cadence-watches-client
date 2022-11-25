import React from 'react';
import { RiLoaderFill } from 'react-icons/ri';

const Loader = ({ children }) => {
    return (
        <div className='container mx-auto max-w-screen-xl font-semibold text-center'>
            <div className='flex justify-center items-center text-xl gap-3'>
                <RiLoaderFill className='text-3xl animate-spin'></RiLoaderFill>
                <p className='animate-pulse pt-1'>{children}</p>
            </div>
        </div>
    );
};

export default Loader;
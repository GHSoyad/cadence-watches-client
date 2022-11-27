import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <section className="relative bg-hero-cover bg-cover bg-center bg-no-repeat -mt-24 max-h-[50vh] sm:max-h-[80vh]">
            <div className="absolute inset-0 bg-base-100/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-base-100/95 sm:to-base-100/5"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 h-[50vh] flex lg:h-screen items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Buy and Sell Watches
                    </h1>
                    <p className="my-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        A place to safely sell and purchase the watches you love!
                    </p>
                    <Link to='/login'><button className='btn sm:btn-wide bg-base-300 border-0 hover:glass'>Get Started</button></Link>
                </div>
            </div>
        </section>

    );
};

export default HeroBanner;
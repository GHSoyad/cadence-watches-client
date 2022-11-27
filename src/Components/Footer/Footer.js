import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-base-200 mt-20'>
            <footer className="footer md:pt-10 pb-4 container mx-auto max-w-screen-xl">
                <div></div>
                <div className='mx-auto md:mx-0 flex flex-col items-center md:items-start'>
                    <div className="flex items-center mb-5">
                        <img src="favicon.png" alt="icon" className='w-12 h-12 mr-1' />
                        <p><span className='font-bold text-lg'>Cadence Watches</span><br />Buy and Sell Watches</p>
                    </div>
                    <div className='md:ml-4 text-center md:text-start'>
                        <p className='text-base font-bold mb-2'>Follow Us</p>
                        <div className="flex items-center gap-5 text-2xl">
                            <a href='https://www.facebook.com/golam.sowad/' target='_blank' rel='noreferrer' className='hover:scale-110 transition-all'><FaFacebook></FaFacebook></a>
                            <a href='https://github.com/GHSoyad' target='_blank' rel='noreferrer' className='hover:scale-110 transition-all'><FaGithub></FaGithub></a>
                            <a href='https://www.linkedin.com/in/ghsoyad/' target='_blank' rel='noreferrer' className='hover:scale-110 transition-all'><FaLinkedin></FaLinkedin></a>
                        </div>
                    </div>
                </div>
                <div className='mx-auto md:mx-0 flex flex-col items-center md:items-start'>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div className='mx-auto md:mx-0 flex flex-col items-center md:items-start'>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div className='mx-auto md:mx-0 flex flex-col items-center md:items-start'>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>

            <div className="divider m-0"></div>

            <footer className="py-4 container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0">
                <p className='text-center text-sm'>Copyright © 2022 Golam Hasnain Soyad</p>
            </footer>
        </div>
    );
};

export default Footer;
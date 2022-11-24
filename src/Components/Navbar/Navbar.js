import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';

const Navbar = () => {

    const menuLinks = [
        { name: 'Home', path: '/' },
        { name: 'Blogs', path: '/blogs' }
    ]
    return (
        <div className="navbar bg-base-100 justify-between container mx-auto max-w-screen-lg">
            <Link className="max-w-[200px]"><img src={logo} alt="" className='w-full rounded' /></Link>
            <div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuLinks.map((menuLink, i) => <li key={i}><Link to={menuLink.path}>{menuLink.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuLinks.map((menuLink, i) => <li key={i}><Link to={menuLink.path}>{menuLink.name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { RiCloseFill, RiDashboardFill } from "react-icons/ri";

const Navbar = () => {

    const { userInfo, setUserInfo, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setUserInfo(null);
                toast.success("Logged out successfully.");
                navigate('/');
            })
            .catch(error => toast.error(error.message))
    }

    const menuLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>

        {
            userInfo && userInfo.uid ?
                <li onClick={handleSignOut}><Link>Logout</Link></li>
                :
                <li><NavLink to='/login'>Login</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 justify-between container mx-auto max-w-screen-lg font-semibold">
            <Link to='/' className="max-w-[200px] mr-4"><img src={logo} alt="" className='w-full rounded' /></Link>
            <div className='flex gap-1'>
                <label onClick={() => setIsMenuOpen(!isMenuOpen)} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">{
                    isMenuOpen ?
                        <RiCloseFill className="inline-block w-6 h-6 stroke-current"></RiCloseFill>
                        :
                        <RiDashboardFill className="inline-block w-6 h-6 stroke-current"></RiDashboardFill>
                }</label>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
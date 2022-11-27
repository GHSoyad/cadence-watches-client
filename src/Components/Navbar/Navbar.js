import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const { userInfo, setUserInfo, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(userInfo)

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
                <>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li onClick={handleSignOut}><Link>Logout</Link></li>
                </>
                :
                <li><NavLink to='/login'>Login</NavLink></li>
        }
    </>

    return (
        <div className="bg-base-100/90 z-50 relative">
            <div className="navbar justify-between container mx-auto max-w-screen-xl font-semibold relative">
                <Link to='/' className="max-w-[200px] mr-4"><img src={logo} alt="" className='w-full rounded' /></Link>
                <div className='flex gap-1'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
        </div>
    );
};

export default Navbar;
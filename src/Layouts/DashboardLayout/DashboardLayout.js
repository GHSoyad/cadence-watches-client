import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className='container mx-auto max-w-screen-lg'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-neutral-focus mt-10">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'bg-neutral-focus text-white' : undefined} end>Sidebar Item 1</NavLink></li>
                        <li><NavLink to='/dashboard/add-product' className={({ isActive }) => isActive ? 'bg-neutral-focus text-white' : undefined}>Sidebar Item 2</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
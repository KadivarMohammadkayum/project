import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { FaBox } from "react-icons/fa6";  
import { MdManageHistory, MdProductionQuantityLimits  } from "react-icons/md"; 
import { BiSolidContact } from "react-icons/bi"; 

const AdminSidebar = () => {
    const Links = [
        {
            icon : <AiOutlineDashboard />,
            name : 'Dashboard',
            to: "/Admin/dashboard"
        },
        {
            icon : <MdProductionQuantityLimits  />,
            name : 'Add Product',
            to: "/Admin/AddProduct"
        },
        {
            icon : <MdManageHistory />,
            name : 'Manage Product',
            to: "/Admin/manageproduct"
        },
        {
            icon : <FaBox />,
            name : 'Orders',
            to: "/Admin/orders"
        },
        {
            icon : <BiSolidContact />,
            name : 'Manage Contact Form',
            to: "/Admin/managecontactform"
        },
        {
            icon : <HiOutlineLogin />,
            name : 'Login',
            to: "/Admin/logi"
        },
        {
            icon : <AiOutlineLogout />,
            name : 'Log Out',
            to: "/Admin/logout"
        }
    ];

    return (
        <section className='bg-slate-800 h-[100vh] fixed w-[17%]'>
            <div></div>
            <div>
                <ul>
                    {Links.map(({ icon, name, to }, index) => (
                        <li key={index} className="flex items-center space-x-2 p-2 ps-5 text-white hover:bg-slate-700 rounded-full mt-4">
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3  ${isActive ? 'font-bold text-red-400 py-2 w-full rounded-full' : ''} rounded-full w-full py-1`
                                }
                            >
                                {icon}
                                <span>{name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default AdminSidebar;

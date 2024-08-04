import React from 'react'
import { Link } from 'react-router-dom'
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
            to: "/Admin/dashboard"
        },
        {
            icon : <BiSolidContact />,
            name : 'Manage Contact Form',
            to: "/Admin/managecontactform"
        },
        {
            icon : <HiOutlineLogin />,
            name : 'Login',
            to: "/Admin/dashboard"
        },
        {
            icon : <AiOutlineLogout />,
            name : 'Log Out',
            to: "/Admin/dashboard"
        }
    ]
    return (
        <>
            <section className='bg-slate-800 h-[100vh] fixed w-[17%]'>
                <div></div>
                <div>
                    <ul className=''>
                        {
                            Links.map(({ icon, name, to }, index) => {
                                    return (
                                        <li key={index} className="flex items-center space-x-2 p-2 ps-5 text-white hover:bg-slate-700 rounded-full mt-4">
                                            <Link to={to} className='flex items-center space-x-3 '>
                                            {icon}
                                            <span>{name}</span>
                                            </Link>
                                        </li>
                                    )
                                }
                            )
                        }
                        
                    </ul>
                </div>

            </section>
        </>
    )
}

export default AdminSidebar

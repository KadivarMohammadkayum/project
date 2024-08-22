import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const AdminHeader = () => {
    return (
        <>
            <header className='  sticky top-0 z-40  bg-slate-800 py-3'>
                <nav className='flex justify-between text-white items-center container'>
                    <div className='logo'>
                        <h1 className='font-bold text-3xl'>E Commerce</h1>
                    </div>
                    <div className='flex items-center w-[40vh] gap-x-2 bg-white rounded-full p-2 text-black'>
                    <FaSearch />
                        <input type="search" placeholder='Search' name='search' className='outline-none border-none w-full'/>
                        
                    </div>
                    <div className='flex items-center gap-x-2'>
                    <IoIosNotificationsOutline  className='text-2xl cursor-pointer'/>
                        <button className='bg-red-800 py-2 px-4 rounded-full text-md font-semibold'>Logout</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default AdminHeader

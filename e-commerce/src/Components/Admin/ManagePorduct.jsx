import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdEdit, MdDelete } from "react-icons/md";

const ManagePorduct = () => {

    const [data, setData] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9999/product`).then((response) => {
            setData(response.data);
        });
    }, [])


    return (
        <>
            <AdminHeader />
            <section>
                <div className='flex'>
                    <div className='w-1/6'>
                        <AdminSidebar />
                    </div>
                    <div className='w-5/6 m-3'>
                        <table className=''>
                            <thead>
                                <tr className='border-2 border-black'>
                                    <th className='border-2 border-black'>Image</th>
                                    <th className='border-2 border-black'>Name</th>
                                    <th className='border-2 border-black'>Title</th>
                                    <th className='border-2 border-black'>Description</th>
                                    <th className='border-2 border-black'>Category</th>
                                    <th className='border-2 border-black'>Deals</th>
                                    <th className='border-2 border-black'>Old Price</th>
                                    <th className='border-2 border-black'>New Price</th>
                                    <th className='border-2 border-black'>Edit</th>
                                    <th className='border-2 border-black'>Delet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className='border-2 border-black w-[8%] p-1'>
                                                <img src={item.image} alt={item.name} height={"80px"} width={"80px"} />
                                            </td>
                                            <td className='border-2 border-black px-1'>
                                                {item.name}
                                            </td>
                                            <td className='border-2 border-black w-[17%] px-3'>
                                                {item.title}
                                            </td>
                                            <td className='border-2 border-black w-[25%] px-3'>
                                                {item.description}
                                            </td>
                                            <td className='border-2 border-black'>
                                                {item.category}
                                            </td>
                                            <td className='border-2 border-black px-3'>
                                                {item.deals}
                                            </td>
                                            <td className='border-2 border-black px-3 w-[4%]'>
                                                {item.oldprice}
                                            </td>
                                            <td className='border-2 border-black px-3 w-[4%]'>
                                                {item.newprice}
                                            </td>
                                            <td className='border-2 border-black p-2 ps-4 items-center mx-auto'>
                                                <button onClick={
                                                    () => Navigate(`/Admin/updateproduct/${item.id}`)
                                                }>
                                                    <MdEdit className='text-green-600  mx-auto items-center text-2xl' />
                                                </button>
                                            </td>
                                            <td className='border-2 border-black p-3 ps-4'>
                                                <button onClick={() => Navigate(`/Admin/deleteproduct/${item.id}`)}>
                                                    <MdDelete className='text-red-600 items-center mx-auto text-2xl' />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ManagePorduct

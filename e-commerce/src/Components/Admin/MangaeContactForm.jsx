  import React, { useState, useEffect } from 'react'
  import AdminHeader from './AdminHeader'
  import AdminSidebar from './AdminSidebar'
  import axios from 'axios'
  import { MdDelete } from "react-icons/md";

  const MangaeContactForm = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:9999/Contactus`).then((response) => {
        setData(response.data);
      });
    }, ['data']);

    const handelDelete = (id) => {
      axios.delete(`http://localhost:9999/Contactus/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
    };
    return (
      <>
        <AdminHeader />
        <section>
          <div className='flex'>
            <div className='w-1/6 m-0 p-0'>
              <AdminSidebar />
            </div>
            <div className='w-5/6 p-3 px-5'>
            <h2 className='text-3xl py-5 font-bold'>Manage Contact Form</h2>
              <table className=''>
                <thead>
                  <tr className='border-2 border-black min-w-[100%]'>
                    <th className='border-2 border-black py-2 px-3 w-[15%]'>Name</th>
                    <th className='border-2 border-black w-[15%]'>Phone</th>
                    <th className='border-2 border-black w-[20%]'>Email</th>
                    <th className='border-2 border-black w-[30%]'>Message</th>
                    <th className='border-2 border-black px-3  w-[10%]'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((item) => {
                    return (
                      <tr key={item.id}>

                        <td className='border-2 border-black px-3 py-2 w-[15%]'>
                          {item.name}
                        </td>
                        <td className='border-2 border-black px-3 w-[15%]'>
                          {item.phone}
                        </td>
                        <td className='border-2 border-black px-3 w-[20%]'>
                          {item.email}
                        </td>
                        <td className='border-2 border-black px-3 w-[30%]'>
                          {item.message}
                        </td>
                        <td className='border-2 border-black px-3 w-[10%]'>
                          
                          <button onClick={() => handelDelete(item.id)} className=''>
                            <MdDelete  className='text-red-600 items-center mx-auto text-2xl'/>
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
        </section>
      </>
    )
  }

  export default MangaeContactForm

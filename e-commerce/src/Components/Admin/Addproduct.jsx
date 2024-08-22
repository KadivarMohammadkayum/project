import axios from 'axios';
import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';


const Addproduct = () => {

  const image = useRef(null);
  const name = useRef(null);
  const title = useRef(null);
  const oldprice = useRef(null);
  const newprice = useRef(null);
  const deals = useRef(null);
  const description = useRef(null);
  const category = useRef(null);

  const HandleItem = (e) => {
    e.preventDefault();

    const Data = {
      image: image.current.value,
      name: name.current.value,
      title: title.current.value,
      oldprice: oldprice.current.value,
      newprice: newprice.current.value,
      deals: deals.current.value,
      description: description.current.value,
      category: category.current.value,
    }

    axios.post('http://localhost:9999/product', Data).then(() => {
        Swal.fire({
          title: "Thanks",
          text: "Your Data Successfully Add",
          icon: "success"
        })
      })
      
    e.target.reset();
  }

  return (
    <>
      <AdminHeader />
      <section>
        <div className='flex'>
          <div className='w-1/6 m-0 p-0'>
            <AdminSidebar />
          </div>
          <div className='w-5/6 p-3 px-5'>
            <form onSubmit={HandleItem}>
              <div className='grid grid-cols-2 gap-4'>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Image :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter Product Image URL'
                    ref={image}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter Product Title'
                    ref={name}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Title :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter Product Content'
                    ref={title}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Old Price :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter Product Old Price'
                    ref={oldprice}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">New Price :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter Product New Price'
                    ref={newprice}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Deals :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter Product deal'
                    ref={deals}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2" for="category">Category :</label>
                  <select name='category' id='category' ref={category} className='shadow border appearance-none rounded w-full py-2 px-3 leading-tight focus:shadow-outline focus:outline-none text-gray-700'>
                    <option>-Select Category-</option>   
                    <option >Men</option> 
                    <option >Women</option>
                    <option >Kid</option> 
                  </select>
                </div>
              </div>
              <div className="mb-">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Description :</label>
                <textarea
                  ref={description}
                  id="info"
                  placeholder="Enter Product Description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 h-[24vh] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addproduct

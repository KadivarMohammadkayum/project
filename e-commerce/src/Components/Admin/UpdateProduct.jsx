import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate(); // useNavigate should be all lowercase
    const { id } = useParams();

    // for edit data
    const image = useRef("");
    const name = useRef("");
    const title = useRef("");
    const oldprice = useRef("");
    const newprice = useRef("");
    const deals = useRef("");
    const description = useRef("");
    const category = useRef("");

    useEffect(() => {
        axios.get(`http://localhost:9999/product/${id}`).then((response) => {
            setData(response.data);

            image.current.value = response.data.image;
            name.current.value = response.data.name;
            title.current.value = response.data.title;
            oldprice.current.value = response.data.oldprice;
            newprice.current.value = response.data.newprice;
            deals.current.value = response.data.deals;
            description.current.value = response.data.description;
            category.current.value = response.data.category;
        });
    }, [id]);

    const Update = (event) => {
        event.preventDefault();

        let update = {
            image: image.current.value,
            name: name.current.value,
            title: title.current.value,
            oldprice: oldprice.current.value,
            newprice: newprice.current.value,
            deals: deals.current.value,
            description: description.current.value,
            category: category.current.value,
        };

        axios.put(`http://localhost:9999/product/${id}`, update).then(() => {
            Swal.fire({
                title: "Product is Updated",
                text: "Congratulations Product Edited Successfully",
                icon: "success",
            });
            navigate('/Admin/manageproduct'); // Correct path for navigation
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
                        <form onSubmit={Update}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image :</label>
                                    <input
                                        type="text"
                                        id="image"
                                        name="image"
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
                                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title :</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter Product Content'
                                        ref={title}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="oldprice" className="block text-gray-700 text-sm font-bold mb-2">Old Price :</label>
                                    <input
                                        type="text"
                                        id="oldprice"
                                        name="oldprice"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter Product Old Price'
                                        ref={oldprice}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="newprice" className="block text-gray-700 text-sm font-bold mb-2">New Price :</label>
                                    <input
                                        type="text"
                                        id="newprice"
                                        name="newprice"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter Product New Price'
                                        ref={newprice}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="deals" className="block text-gray-700 text-sm font-bold mb-2">Deals :</label>
                                    <input
                                        type="text"
                                        id="deals"
                                        name="deals"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter Product deal'
                                        ref={deals}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category :</label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder='Enter Product Category'
                                        ref={category}
                                    />
                                </div>
                            </div>
                            <div className="mb-">
                                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description :</label>
                                <textarea
                                    ref={description}
                                    id="description"
                                    placeholder="Enter Product Description"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 h-[30vh] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit" // Changed to type="submit"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdateProduct;

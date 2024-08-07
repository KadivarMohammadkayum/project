import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddMenu = () => {

    const [data, setData] = useState({
        image: "",
        name: "",
        category: "",
        price: "",
        description: "",
        rating: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:7589/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setData({
                image: "",
                name: "",
                description: "",
                price: "",
                category: "",
                rating: "",
            })
        } else {
            console.log("Error Posting  Data");

        }
    }



    return (
        <>
            <section>
                <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-10 ">
                    <h2 className=" font-bold mb-4 flex justify-between ">
                        <span className="text-2xl">Add New Product</span>
                        <span>
                            <Link to='/' className="bg-black text-white px-3 py-2 rounded-md mt-3">Output</Link>
                        </span>
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Product Images
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={data.image}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={data.category}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                Rating
                            </label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                value={data.rating}
                                onChange={handleChange}
                                min="1"
                                max="5"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={handleChange}
                                value={data.description}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>

    );
};

export default AddMenu;

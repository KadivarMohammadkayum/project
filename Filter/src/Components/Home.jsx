import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";

const Home = () => {

    const [menuItems, setMenuItems] = useState([]); //to store menuItems for allproduct
    const [filterItems, setFilterItems] = useState([]); //to store filterdItems
    const [filter, setFilter] = useState('all'); // to store filter product
    useEffect(() => {
        // Fatch data from API
        fetch('http://localhost:7589/data')
            .then(response => response.json())
            .then(data => {
                setMenuItems(data);
                setFilterItems(data);
            });
    }, []);

    useEffect(() => {
        //filter menu items
        if (filter === 'all') {
            setFilterItems(menuItems);
        } else {
            setFilterItems(menuItems.filter(item => item.category === filter));
        }
    }, [filter, menuItems])
    return (
        <>
            <section className='container mx-auto'>
                <div className="py-8">
                    <h1 className="text-3xl font-bold mb-6">Our Menu ss</h1>
                    <div className='felx justify-center mb-4'>
                        <button
                            className={`px-4 py-2 mx-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 rounded-md ${filter === 'breackfast' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setFilter('breackfast')}
                        >
                            Breack Fast
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 rounded-md ${filter === 'lunch' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setFilter('lunch')}
                        >
                            Lunch
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 rounded-md ${filter === 'dinner' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setFilter('dinner')}
                        >
                            Dinner
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
                        {filterItems && filterItems.map(item => (
                            <div key={item.id} className=" p-4 border rounded flex">
                                <div className='w-1/2'>
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.category}</p>
                                    <p className="text-gray-800 font-bold">Rs. {item.price}</p>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className={`w-6 h-6 cursor-pointer ${item.rating >= star ? 'text-yellow-500' : 'text-gray-200'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <div className=' w-1/2'>
                                    <img src={item.image} alt="item.name" className='w-full rounded-md h-32' />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

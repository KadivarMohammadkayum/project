import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Banner from '../../Pages/Banner';

const ProductDetails = () => {

    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:9999/product/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error)
            })
    }, [id]);

    const addToCart = (items) => {

        axios.post('http://localhost:9999/cart', items)
            .then(response => {
                Swal.fire({
                    title: "Success",
                    text: "Thanks For Purchase! Your product was added successfully.",
                    icon: "success",
                });
                console.log("Items add to cart", response);
            })
            .catch(error => {
                console.error(error);
            });

    };

    const Discount = (oldprice, newprice) => {
        return Math.round(((oldprice - newprice) / oldprice) * 100);
    }

    if (!product || Object.keys(product).length === 0) {
        return (
            <div>Loading... </div>
        )
    };

    return (
        <>
            <Banner title='Porduct-Details' page={'Product-Details'} />
            <section>
                <div className="container mx-auto p-4 lg:max-w-[80%]">
                    <div className="border rounded-lg shadow-md p-4 lg:mb-4">
                        <div className="flex flex-col md:flex-row ">
                            <div className="">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-md h-66 items-center m-auto"
                                />
                            </div>
                            <div className="w-full md:w-2/3 lg:ps-12 lg:my-10">
                                <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                                <h2 className="text-md mb-1 text-xl">{product.title}</h2>
                                <h2 className="text-md mb-1 text-lg text-red-500 font-semi-bold">{product.deals}</h2>
                                <div className="mb-2 space-x-4">
                                    {product.newprice && product.oldprice ? (
                                        <>
                                            <span className="font-bold text-xl text-red-600 mr-2">
                                                Rs. {product.newprice}
                                            </span>
                                            <del className=" text-gray-500" disabled={product.length == 0}>
                                                Rs. {product.oldprice}
                                            </del>


                                            <span className="bg-red-100 text-red-600 text-sm ml-2 px-2 py-1 rounded" disabled={product.length == 0}>
                                                SAVE {Discount(product.oldprice, product.newprice)}%
                                            </span>
                                        </>

                                    ) : (
                                        <span className="font-bold text-xl text-red-600 mr-2">
                                                Rs. {product.newprice || product.oldprice}
                                            </span>
                                    )}

                                </div>
                                
                                <button className="bg-black text-white px-3 py-2 rounded my-3"
                                    onClick={() => addToCart(product)}
                                >Add To Cart
                                </button>
                                <div className='lg:my-5'>
                                    <span className='font-bold  lg:text-xl'>Product Discription: </span>{product.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
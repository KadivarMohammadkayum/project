import React from 'react'
import { OurProductData } from '../../Data/Data';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { service } from '../../Data/Data';
import { Arrival } from '../../Data/Data';

const Category = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {/*  */}
            <section className=''>
                {/* Service Section Start */}
                <div className=' grid lg:my-10 md:my-7 sm:my-5 lg:grid-cols-4 md:grid-cols-2 my-10 sm:grid-cols-1 lg:gap-8 md:gap-5 gap-y-5'>
                    {service && service.map((item) => (
                        <div className='flex items-center space-x-4' key={item.id}>
                            <div>
                                <img
                                    src={item.img}
                                    alt=""
                                    width="45px"
                                    className='hover:-translate-y-3 transition ease-in-out delay-150 hover:scale-110 hover:text-yellow-700 duration-300'
                                />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold md:text-sm'>{item.heading}</h3>
                                <p className='text-gray-600'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Service Section End */}

                {/* Category List Section Start */}
                <div>
                    <div className='slider-container my-10 '>
                        <Slider {...settings} >
                            {OurProductData && OurProductData.map((item) => (
                                <div className="relative " key={item.id}>
                                    <Link to={item.link}>
                                        <img src={item.img} alt={item.alt} className='h-96 transition duration-400 ease-in-out hover:scale-110 mx-auto' />
                                    </Link>
                                    <div className='absolute left-0 right-0 bottom-5 bg-white text-black py-3 text-center hover:bg-black hover:text-white transition-colors duration-500 hover:-translate-y-2 lg:w-60 md:w-40 w-36 mx-auto px-2'>
                                        <button className='text-lg font-semibold tracking-wide'>
                                            {item.button}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Category List Section End */}

                {/* Arrival Card Section */}
                <div className=''>
                    <div>
                        <h2 className='text-4xl font-semibold mb-8 overflow-hidden'>New Arrival</h2>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        {Arrival && Arrival.map((item) => (
                            <div key={item.name} className='flex flex-col items-center'>
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className='h-80 w-full max-w-xs rounded-lg mb-4'
                                />
                                <div className='text-center text-xl font-bold'>
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Category

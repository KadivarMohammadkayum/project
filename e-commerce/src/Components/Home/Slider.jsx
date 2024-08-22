import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const slides = [
    {
        id: 1,
        image: './public/assets/Images/banner-1.png',
        title: 'Peach Color Up Neack',
        title2: 'Blouson Top',
        description: 'Get the best deals on spring fashion',
    },
    {
        id: 2,
        image: './public/assets/Images/banner-2.png',
        title: 'Madame Women Black',
        title2: 'Full Sleeve',
        description: 'Exclusive summer styles available now',
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className='relative overflow-hidden'>
            <div className='flex transition-transform duration-1000' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className='relative w-full flex-shrink-0'>
                        <img src={slide.image} alt={slide.title} className='w-full h-auto' />
                        <div className='absolute inset-0 flex flex-col items-start justify-center bg-opacity-50 text-black container mx-auto px-4 lg:px-12 xl:px-16'>
                            <h2 className='text-md sm:text-lg md:text-3xl lg:text-4xl xl:text-6xl leading-[30px] xl:leading-[80px] lg:leading-[60px] md:leading-[48px]'>{slide.title} <br />{slide.title2}</h2>
                            <p className='text-sm md:text-xl lg:text-2xl xl:text-4xl mt-1 md:mt-2 lg:mt-4 xl:mt-5'>{slide.description}</p>
                            <button className='bg-black text-white py-1 px-2 mt-3 text-sm md:py-2 md:px-4 md:text-base lg:py-2 lg:px-4 lg:text-md xl:py-3 xl:px-5 xl:text-xl xl:mt-5 border rounded-lg hover:-translate-y-2 transition-transform'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons for desktop size (hidden on small and medium) */}
            <button
                onClick={prevSlide}
                className='text-xl p-2 absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-black rounded-full items-center justify-center hidden lg:flex'
            >
                <FaArrowLeft />
                </button>
            <button
                onClick={nextSlide}
                className='text-xl p-2 absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-black rounded-full items-center justify-center hidden lg:flex'
            >
                <FaArrowRight />
            </button>

            {/* Buttons for mobile size */}
            <div className='flex absolute z-30 bottom-2 left-1/2 transform -translate-x-1/2 lg:hidden'>
                <button onClick={prevSlide} className='mx-2'>
                    <GoDotFill className={`text-2xl ${currentSlide === 0 ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`} />
                </button>
                <button onClick={nextSlide} className='mx-2'>
                    <GoDotFill className={`text-2xl ${currentSlide === 1 ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`} />
                </button>
            </div>
        </div>
    );
};

export default Slider;

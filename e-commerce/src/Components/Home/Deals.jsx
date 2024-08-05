import React from 'react'

const slides = [
    {
        id: 1,
        image: './public/assets/Images/discount-1.png',
        title: 'Mans Casual',
        title2: 'Style T-Shirt',    
        discount: 'Flat 20% Discount'
    },
    {
        id: 2,
        image: './public/assets/Images/discount-2.png',
        title: 'Buy White Dress',
        title2: 'For Women',    
        discount: 'Flat 30% Discount'
    },
    {
        id: 2,
        image: './public/assets/Images/discount-3.png',
        title: 'Latest Women',
        title2: 'T-&hirt & Pant',
        discount: 'Flat 40% Discount'
    },
];


const Deals = () => {
    return (
        <>
            {/* Product Discount */}
            <section className='my-10'>
                <h2 className=' font-semibold text-4xl my-8'>Big Saving Zone</h2>      
                <div className='relative overflow-hidden'>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        {slides.map((slide) => (
                            <div key={slide.id} className='relative w-full flex-shrink-0'>
                                <img src={slide.image} alt={slide.title} className='w-full h-auto hover:scale-105 duration-300' />
                                <div className='absolute inset-0 flex flex-col items-start justify-center bg-opacity-50 text-black ps-4'>
                                    <h3 className='text-red-600 text-md'>{slide.discount}</h3>
                                    <h2 className='text-3xl leading-9 my-4'>{slide.title} <br />{slide.title2}</h2>
                                    <button className=' text-black text-xl underline underline-offset-2 font-semibold'>Shop Now</button>

                                </div>
                            </div>
                        ))} 
                    </div>   
                </div>
            </section>
            {/* Holiday Deal template */}
            <section className='my-10'>
                <div className='relative'>
                    <img src="./public/assets/Images/deals.png" alt="" className='' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center'>
                            <p className='lg:text-4xl tracking-wider text-md md:text-2xl'>New Clostich Collection</p>
                            <h2 className='lg:leading-[80px] lg:text-7xl lg:mt-4 tracking-wide text-md mt-2 md:text-5xl md:mt-5 sm:'>Holiday Deals On <br /><span>Fashion Clothes</span></h2>
                            <button className='bg-black text-white py-2 px-4 lg:mt-8 mt-4'>View Collection</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deals

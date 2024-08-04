import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsTwitterX, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const products = [
  {
    name: "Prices Drop",
    link: 'pricedrop'
  },
  {
    name: "New Products",
    link: 'newproducts'
  },
  {
    name: "Best Sales",
    link: 'bestsales'
  },
  {
    name: "Contact Us",
    link: 'contactus'
  },
]

const company = [
  {
    name: "Delivery",
    link: 'delivery'
  },
  {
    name: "Terms And Conditions Of Use",
    link: 'termsandconditions'
  },
  {
    name: "About Us",
    link: 'about'
  },
  {
    name: "Return Policy",
    link: 'returnpolicy'
  },
]


const Footer = () => {

  const [accordion, setAccordion] = useState([]);

  const toggleAccordion = (index) => {
    if (accordion.includes(index)) {
      setAccordion(accordion.filter(i => i !== index))
    }
    else {
      setAccordion([...accordion, index])
    }
  }

  return (
    <>
      <footer className="bg-gray-800 text-white lg:py-16 md:py-10 py-5">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 my-auto gap-y-3">
          {
            [0].map((index) => (
              <>

                {/* Store Information */}
                <div key={index}>
                  <h2 className="font-bold lg:hidden text-xl lg:mb-3 flex items-center justify-between" onClick={() => toggleAccordion(1)}>
                    <span>Store Information</span>
                    <span className='text-3xl'>{accordion.includes(1) ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                  </h2>
                  <h2 className="font-bold hidden md:hidden lg:flex text-xl  text-white mb-3">Store Information</h2>
                  <div className={`mt-3 text-gray-400 lg:block ${accordion.includes(1) ? 'block' : 'hidden'}`}>
                    <div>
                      <p className='flex gap-2'> <MdOutlineLocationOn className='items-start text-2xl' />Clostich - Apparel & Clothing Store<br />507-Union Trade Centre<br />123456<br />France</p>
                      <p className='flex gap-2 my-3'> <MdOutlineMailOutline className='items-start text-2xl ' />Email: sales@yourcompany.com</p>
                      <p className='flex gap-2'> <TfiHeadphoneAlt className='items-start text-2xl' />Phone: (+91) 9876-543-210</p>
                    </div>
                    <div className="flex space-x-4 mt-9">
                      <Link className=' rounded-full p-2.5 text-md bg-white text-black hover:bg-red-600 hover:text-white'><BsFacebook /></Link>
                      <Link className=' rounded-full p-2.5 text-md bg-white text-black hover:bg-red-600 hover:text-white'><BsTwitterX /></Link>
                      <Link className=' rounded-full p-2.5 text-md bg-white text-black hover:bg-red-600 hover:text-white'><BsYoutube /></Link>
                      <Link className=' rounded-full p-2.5 text-md bg-white text-black hover:bg-red-600 hover:text-white'><BsInstagram /></Link>
                    </div>
                  </div>
                </div>

                {/* Products */}
                <div key={index}>
                  <h2 className="font-bold lg:hidden text-xl lg:mb-3 flex items-center justify-between" onClick={() => toggleAccordion(2)}>
                    <span>Products</span>
                    <span className='text-3xl'>{accordion.includes(2) ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                  </h2>

                  <div className='text-gray-400'>
                    <h2 className="font-bold hidden md:hidden lg:flex text-xl  text-white mb-3">Products</h2>
                    <div className={`mt-3 text-gray-400 lg:block ${accordion.includes(2) ? 'block' : 'hidden'}`}>
                      <ul>
                        {products && products.map((item, index) => (
                          <li key={index} ><NavLink to={item.link} className='flex gap-1 my-1 hover:translate-x-2 duration-500'>
                            <IoIosArrowRoundForward className='text-2xl items-center my-auto' />{item.name}
                          </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Our Company */}
                <div key={index}>
                  <h2 className="font-bold lg:hidden text-xl lg:mb-3 flex items-center justify-between" onClick={() => toggleAccordion(3)}>
                    <span>Our Company</span>
                    <span className='text-3xl'>{accordion.includes(3) ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                  </h2>
                  <div className='text-gray-400'>
                    <h2 className="font-bold hidden md:hidden lg:flex text-xl  text-white mb-3">Our Company</h2>
                    <div className={`mt-3 text-gray-400 lg:block ${accordion.includes(3) ? 'block' : 'hidden'}`}>
                      <ul>
                        {company.map((item, index) => (
                          <li key={index} ><NavLink to={item.link} className='flex gap-1 my-1 hover:translate-x-2 duration-500'>
                            <IoIosArrowRoundForward className='text-2xl items-center my-auto' />{item.name}
                          </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Subscribe Our Newsletter */}
                <div>
                  <h2 className="font-bold text-xl  text-white mb-3">Subscribe Our Newsletter</h2>
                  <div className={`mt-3 text-gray-400 `}>
                    <p>Subsribe to our latest newsletter to get news about speBsal discounts.</p>
                    <input type="email" placeholder="Your Email Address" className="w-full p-2 my-3 text-black bg-transparent border" />
                    <button className="bg-red-600 text-white px-4 my-2 py-2 rounded-md ">SuBscribe</button>
                    <div className="mt-2">
                      <input type="checkbox" id="agree" />
                      <label htmlFor="agree" className="ml-2">I agree to the terms and conditions and the privacy policy</label>
                    </div>
                  </div>
                </div>
              </>
            ))}

        </div>
        <hr className='bg-gray-500 lg:my-10 md:my-5 my-3' />
        <div className="container mx-auto">
          <p className='md:text-xl'>	&#169; 2024 - Ecommerce software by Clostich</p>
        </div>

      </footer >
    </>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import axios from 'axios';



const Navbar = () => {


    const [isMobileMenuOpne, setIsMoblieMenuOpen] = useState(false) // Mobile Width Dropdown Icon
    const [isToggleDropdown, setIsToggleDropdown] = useState(false)  // More Fashion Icon
    const [isPeresonDropdown, setIsPersonDropdown] = useState(false)  // Persion Icon
    const [cartItems, setCartItems] = useState([]);  // CartItems

    //  Toggle Dropdown fro Fashion icon
    const toggleDropdown = () => {
        setIsToggleDropdown(!isToggleDropdown)
    }
    // Toggle Dropdown for Responsive Width
    const toggleMobile = () => {
        setIsMoblieMenuOpen(!isMobileMenuOpne)
    }
    // Toggel Dropdown for person 
    const togglePerson = () => {
        setIsPersonDropdown(!isPeresonDropdown)
    }
 
    // Fatch Api for cart
    useEffect(() => {
        axios.get("http://localhost:9999/cart")
            .then((response) => {
                setCartItems(response.data);
            })
    }, []);

    return (
        <>

            <header className=' text-black bg-white sticky top-0 z-30 navbar font-serif'>
                <nav className=' flex justify-between items-center mx-auto py-3 container'>
                    {/* Logo */}
                    <div className='logo'>
                        <Link to={"/"}>
                            <h1 className='text-2xl font-bold'>Clostich</h1>
                        </Link>
                    </div>

                    {/* Destop navigation */}
                    <div className='hidden md:flex items-center md:my-2'>
                        <div className='my-auto nav-menu'>
                            <ul className='inline-flex space-x-5 md:space-x-10 items-center text-sm menu'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/men'>Men</NavLink></li>
                                <li><NavLink to='/women'>Women</NavLink></li>
                                <li><NavLink to='/kid'>Kids</NavLink></li>
                                <li><NavLink to='/contactus'>Contact us</NavLink></li>
                                <li className='relative'
                                  
                                  
                                >
                                    <button
                                        className='flex items-center w-full'
                                        onClick={toggleDropdown}
                                      >
                                        Fashion {isToggleDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                    </button>
                                    {
                                        isToggleDropdown && (
                                            <div className='absolute bg-white text-gray-400 border rounded text-sm mt-2'>
                                                <ul className='py-3 px-4 space-y-3 menu'>
                                                    <li className='hover:text-black'><NavLink to='/watch'>Watch</NavLink></li>
                                                    <li className='hover:text-black'><NavLink to='/sungalasess'>Sunglasess</NavLink></li>
                                                    <li className='hover:text-black'><NavLink to='/shoes'>Shoes</NavLink></li>
                                                    <li className='hover:text-black'><NavLink to='/bag'>Bags</NavLink></li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </li>
                                {/* Register */}
                                <li className='relative'
                                >
                                    <button 
                                    onClick={togglePerson}
                                
                                    >
                                        <IoPersonSharp />
                                    </button>
                                    {
                                        isPeresonDropdown && (
                                            <div className='absolute bg-white text-gray-400 border rounded text-sm mt-2'>
                                                <ul className='py-3 px-4 space-y-3 menu'>
                                                    <li><NavLink to={'/login'}>Login</NavLink></li>
                                                    <li><NavLink to={'/register'}>Register</NavLink></li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </li>
                                {/* cart */}
                                <li className='text-2xl relative'>
                                    <NavLink to='/cart'>
                                        <IoMdCart className='relative' />
                                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-semibold  text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900 top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                                            {cartItems.length}
                                        </div>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className='lg:hidden ml-2 flex items-center space-x-4 text-3xl md:hidden'>
                        <NavLink><IoMdCart /></NavLink>
                        <button onClick={() => toggleMobile(false)} className='text-4xl items-end border-none ouline-none '>
                            {isMobileMenuOpne ? <IoMdClose /> : <GiHamburgerMenu />}
                        </button>
                    </div>
                </nav>
                {/* Mobile Navigation */}
                <div className={` ${isMobileMenuOpne ? "block" : "hidden"} h-screen`}>
                    <ul className=' border rounded flex flex-col justify-center items-center space-y-3 mt-4'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/mens'>Men</NavLink></li>
                        <li><NavLink to='/womens'>Womens</NavLink></li>
                        <li><NavLink >Kids</NavLink></li>
                        <li><NavLink >Watch</NavLink></li>
                        <li><NavLink >Sunglasses</NavLink></li>
                        <li><NavLink >Shoes</NavLink></li>
                        <li><NavLink >Bag</NavLink></li>
                        <li className=''><NavLink>Login / </NavLink><NavLink>Register</NavLink></li>
                    </ul>
                </div>
            </header >

        </>
    )
}

export default Navbar

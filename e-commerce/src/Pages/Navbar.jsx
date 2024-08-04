import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";




const Navbar = () => {

    const [isMobileMenuOpne, setIsMoblieMenuOpen] = useState(false) //Mobile menu
    const [isToggleDropdown, setIsToggleDropdown] = useState(false)

    const toggleDropdown = () => {
        setIsToggleDropdown(!isToggleDropdown)
    }
    const toggleMobile = () => {
        setIsMoblieMenuOpen(!isMobileMenuOpne)
    }

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
                                <li className='relative'>
                                    <button onClick={toggleDropdown} className='flex items-center w-full'>
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
                                <li className='text-2xl'><NavLink to='cart'><IoMdCart /></NavLink></li>
                                <li className=''><NavLink to='/login'>Login / </NavLink><NavLink to='register'>Register</NavLink></li>
                            </ul>
                        </div>
                    </div>
                                    
                    <div className='lg:hidden ml-2 flex items-center space-x-4 text-3xl md:hidden'>
                        <NavLink><IoMdCart /></NavLink>
                        <button onClick={() => toggleMobile(false)} className='text-4xl items-end border-none ouline-none '>
                            {isMobileMenuOpne ?  <IoMdClose /> : <GiHamburgerMenu /> }
                        </button>
                    </div>
                </nav>
                {/* Mobile Navigation */}
                <div className={` ${isMobileMenuOpne ? "block" : "hidden"} h-screen`}>
                <ul className='bg-transparent border rounded flex flex-col justify-center items-center space-y-3 mt-4'>
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

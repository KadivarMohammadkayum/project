import React from 'react'
import { useNavigate } from 'react-router-dom';
import bannerimg from '../../public/assets/Images/banner-4.jpg'
import { FaHome } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";


const Banner = ({ title, page, }) => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="relative w-full h-60 text-white flex justify-center items-center">
      <img src={bannerimg} alt={title} className="absolute w-full h-full object-cover" />
      <div className="relative z-10 text-center flex flex-col items-center">
        <p className="uppercase lg:text-4xl font-bold mb-2 text-xl">{title}</p>
            <ul className="flex items-cente align-middle lg:text-xl text-sm my-auto">
              <li className="flex items-center justify-center">
                <button onClick={goToHome} >
                  <FaHome/>     
                </button>
              </li>
              <li className="flex items-center justify-center me-2 ms-3"> <MdArrowBackIos/></li>
              <li className="flex items-center justify-center"> {page}</li>
            </ul>
      </div>
      <div className="absolute inset-0 bg-black opacity-50" />
    </section>
    </>
  )
}

export default Banner








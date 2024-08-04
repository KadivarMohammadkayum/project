import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import bannerImg from '../../../public/Images/banner-4.jpg'
import Banner from '../../Pages/Banner';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: './public/Images/ceo.jpeg'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: './public/Images/cto.jpeg'
  },
  {
    name: 'Bob Johnson',
    role: 'COO',
    image: './public/Images/coo.jpeg'
  },
];

const features = [
  {
    title: "QUALITY",
    description: "Nunc fringilla lacus nec nibh luctus rhoncus. Morbi ex sapien, ullamcorper in feugiat laoreet, fringilla in dui.",
    icon: <MdOutlineHighQuality />
  },
  {
    title: "PRICE",
    description: "Nunc fringilla lacus nec nibh luctus rhoncus. Morbi ex sapien, ullamcorper in feugiat laoreet, fringilla in dui.",
    icon: <FaRupeeSign />
  },
  {
    title: "RETURN POLICY",
    description: "Nunc fringilla lacus nec nibh luctus rhoncus. Morbi ex sapien, ullamcorper in feugiat laoreet, fringilla in dui.",
    icon: <GiReturnArrow />
  },
];

const feedbacks = [
  {
    name: 'Alex Rodriguez',
    feedback: 'Discovering Minimalin has been a revelation for me. As a busy professional, I often find myself juggling multiple tasks and struggling to find the right words.',
    role: 'Web designer'
  },
  {
    name: 'Sarah Johnson',
    feedback: 'The user experience is fantastic. It has simplified my workflow and increased my productivity significantly. organized.Lorem ipsum dolor sit amet consectetur',
    role: 'HR Manager'
  },
  {
    name: 'Michael Brown',
    feedback: 'A must-have tool for anyone looking to streamline their daily tasks and stay organized.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus!',
    role: 'COmpnay Owner'
  },
];

const posts = [
  {
    title: "SECTION 1.10.32 OF DE FINIBUS BONORUM ET MALORUM",
    date: "October 05, 2015",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...",
    image: "./public/Images/letest.png"
  },
  {
    title: "SAMPLE POST WITH LEFT SIDEBAR",
    date: "October 05, 2015",
    description: "Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam...",
    image: "./public/Images/letest2.webp"
  },
  {
    title: "1914 TRANSLATION BY H. RACKHAM",
    date: "October 05, 2015",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...",
    image: "./public/Images/letest3.webp"
  },
];

const About = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Banner title='about us'page={'About'}/>
      <div className="p-6 bg-gray-100">
        <div className="container mx-auto space-y-10">

          {/* Our Team Section */}
          <div className="py-8 px-4 text-center bg-white">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 justify-center gap-5 ">
              {teamMembers.map((member) => (
                <div key={member.name} className="m-4 p-4">
                  <img className="mx-auto lg:w-80 lg:h-80 sm:w-60 sm:h-60" src={member.image} alt={member.name} />
                  <h3 className="lg:text-2xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-500 lg:text-xl">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cover bg-center py-12 text-black" >
            <div className="container mx-auto text-center ">
              <h2 className="text-4xl font-bold mb-8">WHY CHOOSE US?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center p-4 border-2 border-black rounded-lg">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-12 bg-gray-100">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-66 object-cover" />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.date}</p>
                      <p className="text-gray-700">{post.description}</p>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>

          <div className="py-8 px-4 text-center bg-gray-200 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="relative">
              <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <IoMdArrowBack />
              </button>
              <div>
                <blockquote className="text-lg italic mb-4 mx-5">"{feedbacks[currentIndex].feedback}"</blockquote>
                <cite className="block text-sm font-semibold">{feedbacks[currentIndex].name}</cite>
                <p>{feedbacks[currentIndex].role}</p>
              </div>
              <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <IoArrowForward />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;

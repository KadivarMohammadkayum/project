import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '../../App.css'

const Blog = () => {
  const [data, setData] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9999/product?category=Blog`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      {/* Blog Section Start*/}
      <section className='my-15'>
        <div className='heading mt-8 mb-6'>
          <h1 className='font-semibold text-4xl'>Our Latest Blog</h1>
        </div>
        <Slider {...settings} >
          {data && data.map((blog) => (
            <div key={blog.id} className='p-4 m-2 bg-white rounded shadow-lg gap-5 hover:scale-x-100'>
              <img src={blog.image} alt="" className='h-60 w-full max-w-xs transition duration-300 ease-in-out hover:scale-110 object-cover' />
              <div className='mx-1'>
                <h2 className='my-3 text-red-500 text-lg font-bold'>{blog.name}</h2>
                <p className={`text-justify ${expandedBlog === blog.id ? '' : 'line-clamp-3'} overflow-hidden`}>{blog.description}</p>
                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className=' hover:underline font-bold mt-2'
                >
                  {expandedBlog === blog.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Blog;

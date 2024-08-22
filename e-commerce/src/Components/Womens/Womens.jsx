import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../../Pages/Banner';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9999/product?category=women')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const Discount = (oldprice, newprice) => {
    return Math.round(((oldprice - newprice) / oldprice) * 100);
  };

  return (
    <>
      <Banner title="Women's Clothes" page={`Women's Clothes`} />
      <section className="container mx-auto py-10">
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center mx-auto">
            {data && data.map((item) => (
              <div className="card p-4 rounded-md shadow-lg max-w-sm" key={item.id}>
                {/* Product Image */}
                <div className='flex justify-center'>
                  <img
                    className="h-60 md:h-72 lg:h-80"
                    src={item.image}
                    alt={item.name}
                  />

                </div>
                <div className="mt-4">
                  <div className="font-semibold text-lg lg:text-xl truncate ">{item.name}</div>
                  <p className="text-gray-700 text-sm py-1 truncate ">{item.title}</p>
                  <p className="text-red-800 text-sm">{item.deals}</p>
                  <div className="flex justify-between items-center mt-2">
                    {item.newprice && item.oldprice ? (
                      <>
                        <span className="font-bold text-xl text-red-600 mr-2">
                          Rs. {item.newprice}
                        </span>
                        <del className=" text-gray-500" disabled={item.length == 0}>
                          Rs. {item.oldprice}
                        </del>
                        <span className="bg-red-100 text-red-600 text-sm ml-2 px-2 py-1 rounded" disabled={item.length == 0}>
                          SAVE {Discount(item.oldprice, item.newprice)}%
                        </span>
                      </>

                    ) : (
                      <span className="font-bold text-xl text-red-600 mr-2">
                        Rs. {item.newprice || item.oldprice}
                      </span>
                    )}
                  
                  </div>

                  <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    type='button'
                    onClick={() => {
                      navigate(`/productdetail/${item.id}`)
                    }}
                  >
                    Show More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Men;

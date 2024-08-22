import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Ourproduct = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9999/product?category=ourproduct`).then((Response) => {
      setData(Response.data);
    })
  }, []);

  const DiscountCalculated = (oldprice, newprice) => {
    return Math.round(((oldprice - newprice) / oldprice) * 100)
  };
  return (
    <>
      <section className='' >
        <div>
          <h2 className='text-4xl font-semibold mt-20 mb-10'>Our Product</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mx-auto  '>
          {
            data && data.map((item) => (
              <Link to={`/productdetail/${item.id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-72" key={item.id}>
                  <img
                    className="h-60 md:h-72 lg:h-80 w-full"
                    src={item.image}
                  />
                  <div className="px-6 py-4">
                    <div className="flex justify-between">
                      <div>
                        <h6 className='text-sm font-semibold my-1'>{item.name}</h6>
                        <p className="text-gray-700 text-sm">{item.title}</p>
                      </div>

                      <div className='items-center'>
                        <span className='text-md items-center bg-gray-100 py-1 px-2 rounded'> {" "}{item.newprice}&#8377;</span>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            ))
          }
        </div>

      </section>
    </>
  )
}

export default Ourproduct


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LetestProduct = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9999/product?category=latestproduct`).then((Response) => {
      setData(Response.data);
    })
  }, [])

  return (
    <>
      <section className=''>
        <div>
          <h2 className='text-4xl font-semibold mt-20 mb-10'>Letest Product</h2>
        </div>
        <div className='grid-cols-5 xl:grid-cols-4 md:gird-cols-3 grid sm:grid-cols-2 gap-5'>
          {
            data && data.map((item) => (
              <Link to={`/productdetail/${item.id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-72" key={item.id}>
                  <img
                    className="w-full h-80"
                    src={item.image}
                  />
                  <div className="px-6 py-4">
                    <div className="">
                      <div>
                        <h6 className='text-sm font-semibold my-1'>{item.name}</h6>
                        <p className="text-gray-700 text-sm">{item.title}</p>
                      </div>

                      <div className='my-2 space-x-2'>
                        <span className=' bg-gray-100 py-1 px-2 rounded text-red-500 font-semibold'> {item.newprice}&#8377;</span>
                        <span className='del'> <del>{item.oldprice}</del>&#8377;</span>
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

export default LetestProduct

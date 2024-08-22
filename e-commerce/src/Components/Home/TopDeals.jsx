import React, { useState, useEffect } from "react";
import axios from "axios";

const TopProduct = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4999/sales?categories=TopProduct`)
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
  }, [])
  return (
    <>
     <div className='heading mt-8 mb-6 text-center'>
        <h1 className='font-bold text-3xl underline underline-offset-8'>Top Deals</h1>
      </div>
      <div className="bg-white p-4 w-full  m-2 grid grid-cols-4 gap-5 container">
        {data && data.map((item) => (
          <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-80" key={item.id}>
              <img
                className="w-full h-80"
                src={item.image}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 mx-auto">{item.title}</div>
                <p className="text-gray-700 text-base">{item.content}</p>
                <p className="text-red-800 py-1">{item.deal}</p>
                <p className='my-1'>
                  <span className="text-2xl text-red-700"> {item.newprice}</span>
                  <span className=" line-through ms-2">{item.offprice}</span>
                  <span className="text-green-600 ms-2">{item.offer}</span>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
      <hr className=" h-1  w-1 border-t-0 bg-[black] dark:bg-white/10"/> 
    </>
  );
};

export default TopProduct;

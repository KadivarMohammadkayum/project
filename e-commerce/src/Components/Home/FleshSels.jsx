import React, { useState, useEffect } from "react";
import axios from "axios";

const FleshSales = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4999/sales?categories=Flashsales`)
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
  }, [])
  return (
    <>
      <section>
        <div className="">
          <div className='heading my-6'>
            <h1 className='font-semibold text-5xl'>Flesh Sale</h1>
          </div>
          <div className="bg-white p-4 w-full m-2 grid grid-cols-4 gap-5">
            {data && data.map((item) => (
              <>
                <div className="max-w-sm overflow-hidden shadow-lg w-80 rounded-md" key={item.id}>
                  <img
                    className="w-full h-80"
                    src={item.image}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 mx-auto">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.content}</p>
                    <p className="text-red-800 py-1">{item.deal}</p>
                    <p className='my-1 flex justify-between items-baseline'>
                      <span className="text-2xl text-red-700"> {item.newprice}</span>
                      <span className=" line-through ms-2">{item.offprice}</span>
                      <span className="text-green-600 ms-2">{item.offer}</span>
                      <button className="bg-black text-white py-2 px-3 border rounded-md">Shop Now</button>
                    </p>
                    <div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default FleshSales;

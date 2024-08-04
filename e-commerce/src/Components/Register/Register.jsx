// src/components/Register.js
import React from 'react';
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <>
      <section className='container mx-auto font-[sans-serif]'>
        <div className="min-h-screen items-center justify-evenly grid md:grid-cols-2 gap-8">
          <div>
            <img src="./public/Images/registergif.png" alt="registerm gif" className='lg:max-w-[90%] w-80 h-80 object-contain block mx-auto' />
          </div>
          <div className=" p-8 rounded shadow-md w-full max-w-md bg-[#fff]  md:my-12 sm:my-12">
            <h2 className="text-2xl font-bold mb-6">Create an account</h2>
            <form className=''>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="mt-2">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="ml-2">I agree to the terms and conditions and the privacy policy</label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded mt-4"
              >
                Register
              </button>
              <div className='mt-4'>
                <p>Already Hav Account? <Link className='text-red-800 font-bold mt-5' to={'/login'}>Login Here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>

  );
};

export default Register;

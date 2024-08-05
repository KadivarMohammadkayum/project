import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section>
        <div className="min-h-screen items-center justify-evenly grid md:grid-cols-2 gap-8">
          <div>
            <img src="./public/assets/Images/logingif.gif" alt="registerm gif" className='lg:max-w-[90%] w-80 h-80 object-contain block mx-auto' />
          </div>
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:my-10 sm:my-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded mt-4"
              >
                Login
              </button>
              <div className='mt-4'>
                <p>Don't Have any Account? <Link className='text-red-800 font-bold mt-5' to={'/register'}>Sign up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>

  );
};

export default Login;

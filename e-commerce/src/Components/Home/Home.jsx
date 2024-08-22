import React, { useState } from 'react';
import '../../App.css';
import Ourproduct from './Ourproduct';
import Blog from './Blog';
import Deals from './Deals';
import Slider from './Slider';
import Category from './Category';
import LetestProduct from './LetestProduct';

const Home = () => {



  return (
    <>
      <Slider />
      <section className='container mx-auto'>
        
        <Category />
        <Ourproduct />
        <LetestProduct />
        <Blog />
        <Deals />
      </section>

    </>
  );
}

export default Home;

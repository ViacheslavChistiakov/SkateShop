
import './App.css';
import './scss/components/all.scss'
import Header from './pages/Header.tsx';
import SectionFirst from './pages/SectionFirst.tsx';
import Categories from './pages/Categories.tsx';
import Product from './pages/Product.tsx';
import React, { useState } from 'react';






function App() {



  return (
    <div className="App">
      <Header />
        <SectionFirst />
          <Categories />
        <Product />

    </div>
  );
}

export default App;

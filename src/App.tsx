
import './App.css';
import './scss/components/all.scss'
import Header from './pages/Header.tsx';
import SectionFirst from './pages/SectionFirst.tsx';
import Categories from './pages/Categories.tsx';
import Product from './pages/Product.tsx';
import Filter from './pages/Filter.tsx';
import Sort from './pages/Sort.tsx';
import React from 'react';







function App() {


  return (
    <div className="App">
      <Header />
        <SectionFirst />
          <Categories />
        <Product />
          <Filter />
          <Sort />



    </div>
  );
}

export default App;


import './App.css';
import './scss/components/all.scss'
import Header from './pages/Header.tsx';
import SectionFirst from './pages/SectionFirst.tsx';
import Categories from './pages/Categories.tsx';
import Product from './pages/Product.tsx';
import Filter from './pages/Filter.tsx';
import Sort from './pages/Sort.tsx';
import board1 from  './assets/board1.png';
import board2 from  './assets/board2.png';
import board3 from  './assets/board3.png';
import React from 'react';







function App() {

const [items, setItems] = React.useState([]);

fetch('http://localhost:3001/Decks').then((res) => {
 return res.json();
}).then(json => {
  console.log(json);
})

  return (
    <div className="App">
      <Header />
        <SectionFirst />
          <Categories />
          <div className="product">
            <Product  title='Stefan Janoski Sabo' size='8.25' image={board1} price='59$' />
            <Product  title='MONKEY FROM JUNGLE' size='8.75' image={board2} price='67$' />
            <Product  title='SOUR No Woman No Cry' size='8.25' image={board3} price='89$' />
            </div>
          <Filter />
          <Sort />



    </div>
  );
}

export default App;

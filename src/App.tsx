
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

const [items, setItems] = React.useState([]);


React.useEffect(() => {
  fetch('http://localhost:3001/Decks').then((res) => {
 return res.json();
}).then((arr) => {
  setItems(arr);
});
}, [])



  return (
    <div className="App">
      <Header />
        <SectionFirst />
          <Categories />
          <div className="product">
                {items.map((obj) => (<Product key={obj.id}  title={obj.title} size={obj.size} imageUrl={obj.imageUrl} price={obj.price} />))}
            </div>
          <Filter />
          <Sort />



    </div>
  );
}

export default App;

import React from 'react';
import board1 from  '../assets/board1.png';
import board2 from  '../assets/board2.png';
import board3 from  '../assets/board3.png';



function Product () {
    return (
        <div className="product">
        <div className="first-item">
          <img className='product-view' src={board1} alt="" />
          <div className="product-info">
          <h1 className="title-product">Stefan Janoski Sabor</h1>
            <ul className='product-about'>
              <li className='size'>Size: 8.25</li>
              <li className='collection'>Collection: 2023</li>
            </ul>
            <p className='product-info_wrapper'>
            7 layers 100% of Canadian Maple
            </p>
          </div>
          <div className="product-price">
              <h1 className='price_inner'>59$</h1>
              <button className='buy_item'>BUY</button>
          </div>
        </div>
        <div className="first-item">
          <img className='product-view' src={board2} alt="" />
          <div className="product-info">
          <h1 className="title-product">ALIEN WORKSHOP x Thrasher Missing</h1>
              <ul className='product-about'>
                <li className='size'>Size: 8.75</li>
                <li className='collection'>Collection: 2023</li>
            </ul>
            <p className='product-info_wrapper'>
            7 layers 100% of Canadian Maple
            </p>
          </div>
          <div className="product-price">
              <h1 className='price_inner'>67$</h1>
              <button className='buy_item'>BUY</button>
          </div>
        </div>
        <div className="first-item">
          <img className='product-view' src={board3} alt="" />
          <div className="product-info">
          <h1 className="title-product">SOUR No Woman No Cry</h1>
            <ul className='product-about'>
                <li className='size'>Size: 8.25</li>
                <li className='collection'>Collection: 2023</li>
            </ul>
            <p className='product-info_wrapper'>
            7 layers 100% of Canadian Maple
            </p>
          </div>
          <div className="product-price">
              <h1 className='price_inner'>89$</h1>
              <button className='buy_item'>BUY</button>
          </div>
        </div>

      </div>
    )
}

export default Product;
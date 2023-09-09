import React from 'react';
import board1 from  '../assets/board1.png';
import board2 from  '../assets/board2.png';
import board3 from  '../assets/board3.png';

interface props {
  title: string,
  size: string,
  imageUrl: any,
  price: string,
}


function Product (props: props) {



    return (

        <div  className="first-item">
          <img className='product-view' src={props.imageUrl} alt="" />
          <div className="product-info">
          <h1 className="title-product">{props.title}</h1>
            <ul className='product-about'>
              <li   className='size'>Size: {props.size}</li>
              <li className='collection'>Collection: 2023</li>
            </ul>
            <p className='product-info_wrapper'>
            7 layers 100% of Canadian Maple
            </p>
          </div>
          <div className="product-price">
              <h1 className='price_inner'>{props.price}</h1>
              <button className='buy_item'>BUY</button>
          </div>
      </div>
    )
}

export default Product;
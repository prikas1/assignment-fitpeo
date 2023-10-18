import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import '../app.css';

function Product(props) {
  return (
     <div className='top-div'>
  <div className='pdiv product-container'>
    <img 
      className='imgdiv card'
      src={props.img} 
      alt='product_img'
    />
    <div>
      <h6>{props.name}</h6>
      <p>{props.discription}</p>
    </div>
  </div>
  <div className='pdiv productp'>
    <p>{props.stock}</p>
    <p>{props.price}</p>
    <p>{props.sales}</p>
  </div>
</div>

  )
}

export default Product;
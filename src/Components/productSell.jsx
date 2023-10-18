import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import {cardContent, productContent} from "../Content"
import Product from './Product';
import ProgressCircle from './ProgressCircle';  
import Graph from './graphCard';
import '../app.css';


function ProductSell() {
return(
    <div className="col-lg-12 col-md-12 col-sm-12 product-sell-container">
  <div className="top-div">
    <div>
      <h5>Product Sell</h5>
    </div>
    <div className="right-content">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Last 30 days
      </button>
    </div>
  </div>
  <div className="top-div">
    <p>Product Name</p>
    <div className="pdiv">
      <p>Stock</p>
      <p>Price</p>
      <p>Total sales</p>
    </div>
  </div>
  <hr />
  <Product
    img={productContent[0].imgURL}
    name={productContent[0].name}
    discription={productContent[0].discription}
    stock={productContent[0].stock}
    price={productContent[0].price}
    sales={productContent[0].sales}
  />
  <Product
    img={productContent[1].imgURL}
    name={productContent[1].name}
    discription={productContent[1].discription}
    stock={productContent[1].stock}
    price={productContent[1].price}
    sales={productContent[1].sales}
  />
</div>

)
}


export default ProductSell;
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import {cardContent, productContent} from "../Content"
import Product from './Product';
import ProgressCircle from './ProgressCircle';  
import Graph from './graphCard';
import ProductSell from './productSell';
import '../app.css';


const monthLabels = [
  'Jan', 'Feb', 'March', 'Apr', 'May', 'June',
  'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function RightPortion() {
  

   return (
    <div className="col-12 col-md-9 col-xl-10 py-md-3 pl-mb-5  right-portion" role="main">
      <div className="top-div first">
     <div>
     <h5>Hello Priti <i class="fa fa-hand-paper-o" aria-hidden="true"></i></h5>
     </div>
     
     <div class="input-group mb-3">
       <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
       <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
     
     </div>
     <div className="row card-div">
     <Card
       img={cardContent[0].imgURL}
       work={cardContent[0].work}
       doller={cardContent[0].doller}
       percent={cardContent[0].percent}
      /> 
      <Card
       img={cardContent[1].imgURL}
       work={cardContent[1].work}
       doller={cardContent[1].doller}
       percent={cardContent[1].percent}
      /> 
      <Card
       img={cardContent[2].imgURL}
       work={cardContent[2].work}
       doller={cardContent[2].doller}
       percent={cardContent[2].percent}
      /> 
      <Card
       img={cardContent[3].imgURL}
       work={cardContent[3].work}
       doller={cardContent[3].doller}
       percent={cardContent[3].percent}
      /> 

     </div>

     <div className="row card-div">
        <Graph />
        <ProgressCircle />
  
     </div>
     <div className="row card-div">
       <ProductSell />
     </div>
      
     </div>
   )
} 

export default RightPortion;
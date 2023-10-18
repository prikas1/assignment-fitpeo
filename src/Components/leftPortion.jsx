import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import {cardContent, productContent} from "../Content"
import Product from './Product';
import ProgressCircle from './ProgressCircle';  
import '../app.css';


function LeftPortion() {
      
const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };


  return (
    <div className="col-12 col-md-3 col-xl-2 left-portion">
     <div className='sticky'>
   
       <div className=' heading d-flex align-items-center'>
       <div className="Heading  ">
      <h4><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</h4>
      </div>
       <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >
      <i class="fa fa-bars navigation" aria-hidden="true"></i>
      
      </button>
     </div>
      <div className={`collapse navbar-collapse ${isNavbarVisible ? 'show' : ''}`}>
     <div className="container dash">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</p>
     </div>
      <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Product</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Customers</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Income</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Promote</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Help</p>
     </div>
     <div className="container bottom">
   
    <img className='profileimg' src='my_img.jpg' />
    
    <div className='profile-container'>
    <div className='profiletext'>
     <p> Pritisahani </p>
     <p className='position'>Web developer</p>
     </div>
     <div className='dropicon'><i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
     </div>
     </div>
     </div>
     </div>
     <div className='conditional'>
      <div className="container dash">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</p>
     </div>
      <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Product</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Customers</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Income</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Promote</p>
     </div>
     <div className="container">
     <p><i class="fa fa-tachometer" aria-hidden="true"></i> Help</p>
     </div>
      <div className="container bottom">
   
    <img className='profileimg' src='my_img.jpg' />
    
    <div className='profile-container'>
    <div className='profiletext'>
     <p> Pritisahani </p>
     <p className='position'>Web developer</p>
     </div>
     <div className='dropicon'><i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
     </div>
     </div>
     </div>
     </div>
   </div>
    
     </div>
  )

}

export default LeftPortion;
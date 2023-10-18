import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import '../app.css';


function Card(props) {
   return(
      <div className=" col-md-6 col-sm-12 card">
     <div className="col-sm-12 card-container">
     <img 
     className='left-side' 
     src={props.img}
     alt="card_img"
      />
     
      <div className="right-side">
     
      <p>{props.work}</p>
      <h6>{props.doller}</h6>
      <p>{props.percent}</p>
      
      
      </div>
     </div>
     </div>

   )


}


export default Card;
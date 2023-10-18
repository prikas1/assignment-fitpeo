import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeftPortion from './leftPortion';
import RightPortion from './rightPortion';
import '../app.css';


function App() {
  return (
      <div className="App container-fluid">
       <div className="row flex-xl-nowrap">
         <LeftPortion />
         <RightPortion />
        </div>
      </div>
  );
  

}

export default App;


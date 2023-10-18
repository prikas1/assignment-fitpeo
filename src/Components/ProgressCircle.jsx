import React, { useEffect } from 'react';
import "./progressCircle.css"


const ProgressCircle = () => {
  // Animation logic...

 useEffect(() => {
    const perc = parseFloat(document.getElementById('per').innerText) * 0.01 * 754;
    const percQuarter = parseFloat(perc * 0.25);

    const cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';
    const rules = document.createTextNode(`@keyframes progress-bar {
      0% { stroke-dashoffset: 754; }
      25% { stroke-dashoffset: ${parseFloat(754 - percQuarter)}; }
      50% { stroke-dashoffset: ${parseFloat(754 - percQuarter * 2)}; }
      75% { stroke-dashoffset: ${parseFloat(754 - percQuarter * 3.5)}; }
      100% { stroke-dashoffset: ${parseFloat(754 - percQuarter * 4)}; }
    }`);
    cssAnimation.appendChild(rules);

    document.head.appendChild(cssAnimation);

    setTimeout(() => {
      const progress = document.querySelector('.progress');
      if (progress) {
        progress.style.animation = 'progress-bar 1.2s linear';
        progress.style.strokeDashoffset = parseFloat(754 - percQuarter * 4);
      }

      const svg = document.querySelector('svg');
      if (svg) {
        svg.style.display = 'block';
      }
    }, 500);

    const perc2 = parseFloat(document.getElementById('per2').innerText) * 0.01 * 754;
    const percQuarter2 = parseFloat(perc2 * 0.25);

    const cssAnimation2 = document.createElement('style');
    cssAnimation2.type = 'text/css';
    const rules2 = document.createTextNode(`@keyframes progress-bar2 {
      0% { stroke-dashoffset: 754; }
      25% { stroke-dashoffset: ${parseFloat(754 - percQuarter2)}; }
      50% { stroke-dashoffset: ${parseFloat(754 - percQuarter2 * 2)}; }
      75% { stroke-dashoffset: ${parseFloat(754 - percQuarter2 * 3.5)}; }
      100% { stroke-dashoffset: ${parseFloat(754 - percQuarter2 * 4)}; }
    }`);
    cssAnimation2.appendChild(rules2);

    document.head.appendChild(cssAnimation2);

    setTimeout(() => {
      const progress2 = document.querySelector('.progress2');
      if (progress2) {
        progress2.style.animation = 'progress-bar2 1.2s linear';
        progress2.style.strokeDashoffset = parseFloat(754 - percQuarter2 * 4);
      }

      const svg = document.querySelector('svg');
      if (svg) {
        svg.style.display = 'block';
      }
    }, 500);
  }, []);
 

  return (
    <div className="circle-input card ">
      <h5>Customers</h5>
     <p>Customers that buy product</p>
       
        <h1 hidden><span id="per">40</span>%</h1>
        <h4 hidden><span id="per2">15</span>%</h4>
         <center>
        <h4 ><span >65</span>%</h4>
        </center>
     
        <svg className="progress-circle indefinite" width="300" height="300">
          <g transform="rotate(-90,136,200)">
            <circle className="bg" r="80" cx="220" cy="200" fill="none"></circle>
            <circle className="progress" r="80" cx="220" cy="200" fill="none"></circle>
            <circle className="progress2" r="80" cx="220" cy="200" fill="none"></circle>
        
          </g>
        </svg>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="blue" />
              <stop offset="100%" stopColor="blue" />
            </linearGradient>
          </defs>
        </svg>
  
    </div>
  )
};

export default ProgressCircle;
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../app.css';

const monthLabels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function Graph() {
  const data = [70, 50, 105, 80, 90, 40, 90, 105, 100, 85, 80, 85];

  return (
    <div className="col-md-6 graphdiv card">
      <h5>Overview</h5>
      <p>Monthly Earning</p>
      <div className="graph-container">
        {data.map((height, index) => (
          <div
            key={index}
            className={`graph-bar ${index === 7 ? 'eighth-bar' : ''}`}
            style={{ height: `${height}%` }}
          >
            <div className="label">{monthLabels[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Graph;

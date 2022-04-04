import React from 'react';

function Destination() {
  return (
    <div>
      <h5><strong className='strong'>01 </strong>Pick your destination</h5>

      <div className="destinations">
        <div className="img">
          <img src="/image-moon.webp" alt="Moon Image" />
        </div>
        <div className="description">

          <ul className="planets-list">
            <li><a href="#" className='active'>Moon</a></li>
            <li><a href="#">Mars</a></li>
            <li><a href="#">Europa</a></li>
            <li><a href="#">Titan</a></li>
          </ul>

          <h2>Moon</h2>

          <p>See our planet as you´ve never seen it before. A perfet relaxing trip away to help regain perspective and come back refreshed. While you´re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <hr />
          
          <div className="planet-desc">
            <div className="distance">
              <h6 className='subheading-2'>AVG. Distance</h6>
              <h6 className='subheading-1'>384,400 KM</h6>
            </div>

            <div className="time">
              <h6 className='subheading-2'>Est. Travel Time</h6>
              <h6 className='subheading-1'>3 Days</h6>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
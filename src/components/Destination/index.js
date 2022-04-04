import React from 'react';

const planets = [
  { name: 'Moon', active: true, distance: '384,400 KM', time: '3 Days', img: '/image-moon.webp', desc: 'See our planet as you´ve never seen it before. A perfet relaxing trip away to help regain perspective and come back refreshed. While you´re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.' },
  { name: 'Mars', active: false, distance: '225 Mil. KM', time: '9 Months', img: '/image-mars.webp', desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!' },
  { name: 'Europa', active: false, distance: '628 Mil. KM', time: '3 Years', img: '/image-europa.webp', desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.' },
  { name: 'Titan', active: false, distance: '1.6 Bil. KM', time: '7 Years', img: '/image-titan.webp', desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.' },
]

const currentPlanet = planets[1];

function Destination() {
  return (
    <div>
      <h5><strong className='strong'>01 </strong>Pick your destination</h5>

      <div className="destinations">
        <div className="img">
          <img src={currentPlanet.img} alt="Moon Image" />
        </div>
        <div className="description">

          <ul className="planets-list">
          {planets.map(planet => (
              <li key={planet.name} className={planet.active ? 'active' : ''}><a href="#">{planet.name}</a></li>
            ))}
          </ul>

          <h2>{currentPlanet.name}</h2>

          <p>{currentPlanet.desc}</p>
          <hr />
          
          <div className="planet-desc">
            <div className="distance">
              <h6 className='subheading-2'>AVG. Distance</h6>
              <h6 className='subheading-1'>{currentPlanet.distance}</h6>
            </div>

            <div className="time">
              <h6 className='subheading-2'>Est. Travel Time</h6>
              <h6 className='subheading-1'>{currentPlanet.time}</h6>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
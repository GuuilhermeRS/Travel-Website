import React, { useState, useEffect } from 'react';

import { Bodytext, Heading2, Heading5, Subheading1, Subheading2 } from '../../styles/global';
import { Section, Planet, PlanetList, PlanetInfo } from './styles';

const planets = [
  { name: 'Moon', active: true, distance: '384,400 KM', time: '3 Days', img: '/image-moon.webp', desc: 'See our planet as you´ve never seen it before. A perfet relaxing trip away to help regain perspective and come back refreshed. While you´re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.' },
  { name: 'Mars', active: false, distance: '225 Mil. KM', time: '9 Months', img: '/image-mars.webp', desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!' },
  { name: 'Europa', active: false, distance: '628 Mil. KM', time: '3 Years', img: '/image-europa.webp', desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.' },
  { name: 'Titan', active: false, distance: '1.6 Bil. KM', time: '7 Years', img: '/image-titan.webp', desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.' },
]

function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState(planets[0]);

  
  function handleChangePlanet(e) {
    const name = e.target.id;

    setCurrentPlanet(planets.map(planet => planet.name === name
        ? planet.active = true
        : planet.active = false
      )
    )
  }

  useEffect(() => {
    setCurrentPlanet(planets.filter(planet => planet.active === true)[0]);
  }, [currentPlanet]);

  return (
    <Section>
      <Heading5><strong className='strong'>01 </strong>Pick your destination</Heading5>

      <Planet>
        <img src={currentPlanet.img} alt="Moon Image" />
        
        <div>

          <PlanetList>
          {planets.map(planet => (
            <li
              key={planet.name}
              className={planet.active ? 'active' : ''}
            >
              <a href="#"
                id={planet.name}
                onClick={handleChangePlanet}
              >
                {planet.name}
              </a>
            </li>
          ))}
          </PlanetList>

          <Heading2>{currentPlanet.name}</Heading2>

          <Bodytext>{currentPlanet.desc}</Bodytext>
          
          <PlanetInfo>
            <div>
              <Subheading2>AVG. Distance</Subheading2>
              <Subheading1>{currentPlanet.distance}</Subheading1>
            </div>

            <div>
              <Subheading2>Est. Travel Time</Subheading2>
              <Subheading1>{currentPlanet.time}</Subheading1>

            </div>
          </PlanetInfo>
        </div>
      </Planet>
  </Section>
  );
}

export default Destination;
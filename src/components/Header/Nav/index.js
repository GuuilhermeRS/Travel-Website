import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return(
    <nav className="nav">
      <div className="bg"></div>
      <div className="nav-container">
        <Link to="/"><strong>00 </strong>Home</Link>
        <Link to="/destination"><strong>01 </strong>Destination</Link>
        <Link to="/crew"><strong>02 </strong>Crew</Link>
        <Link to="/tech"><strong>03 </strong>Technology</Link>
      </div>
    </nav>
  )
}

export default Nav;
import React from "react";
import { Link } from 'react-router-dom';

import { Navbar } from "./styles";

function Nav() {
  return(
    <Navbar>

      <Link to="/" className="active"><span>00 </span>Home</Link>
      <Link to="/destination" ><span>01 </span>Destination</Link>
      <Link to="/crew" ><span>02 </span>Crew</Link>
      <Link to="/tech" ><span>03 </span>Technology</Link>

    </Navbar>
  )
}

export default Nav;
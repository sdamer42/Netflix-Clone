import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../Navbar/Navbar.css"
// import { click } from "@testing-library/user-event/dist/click";

const Navbar = () => {

  const[ click, setClick ] = useState(false);

  const handleClick = () =>{
    setClick(!click)
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link><h2>Netflix</h2></Link>
        </div>
        <div className={click ? "menu active" : "menu"}>

          {/* <select className="language">
              <option className="la">English</option>
              <option className="la">Hindi</option>
              <option className="la">Marathi</option>
          </select> */}

          <div id="google_translate_element">Google</div>
          <Link to="/signin">Sign In</Link>
          </div>

        <div className="hamburger" onClick={handleClick}>
          {
            click ? (
              <FaTimes style={{ color: "white" }} size={25} />
            ) : (
              <FaBars style={{ color: "white" }}  size={25} />
            )
          }
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;

import React from 'react';
import {NavLink} from 'react-router-dom'



const Navigation = () => {
    return (
        <div className="navigation">
          <div className="header-logo">
            {/* <img src={logo} alt="plant" /> */}
            <h4>Water My Plants</h4>
          </div>
          <div className="links">
            <NavLink className="nav-links" to="/login">Sign In</NavLink>
            <NavLink className="nav-links" to="/">Sign Up</NavLink>
          </div>
        </div>
    )
}

export default Navigation
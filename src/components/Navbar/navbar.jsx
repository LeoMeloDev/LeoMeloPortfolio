import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Leo Melo
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/visual-design">
                  Visual Design
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/web-development">
                  Web Development
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/photography">
                  Photography
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/video">
                  Video
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/sound-editing">
                  Sound Editing
                </NavLink>
              </li>
       
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
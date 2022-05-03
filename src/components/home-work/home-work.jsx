import React from "react";
import { NavLink } from "react-router-dom";

class Work extends React.Component {
    render() {
      return (
        <div className="work">
            <h3 className="work-title">work_</h3> 
          <div className="work-boxes">
            <div className="work-box">
                <h3 className="work-box-title"><NavLink className="nav-link-home" to="/visual-design">visual design_</NavLink></h3>
            </div>
            <div className="work-box">
                <h3 className="work-box-title"><NavLink className="nav-link-home" to="/web-development">web development_</NavLink></h3>
            </div>
            <div className="work-box">
                <h3 className="work-box-title"><NavLink className="nav-link-home" to="/photography">photography_</NavLink></h3>
            </div>
            <div className="work-box">
                <h3 className="work-box-title"><NavLink className="nav-link-home" to="/video">video_</NavLink></h3>
            </div>
            <div className="work-box">
                <h3 className="work-box-title"><NavLink className="nav-link-home" to="/sound-editing">sound editing_</NavLink></h3>
            </div>
          </div>
         </div>
      )
    }
  }

export default Work;
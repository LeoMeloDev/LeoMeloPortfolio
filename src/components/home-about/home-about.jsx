import React from "react";
import LeoMelo from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/LeoMelo.jpg';

class About extends React.Component {
    render() {
      return (
          <div className="about">
            <div className="about-left">
                <h3 className="about-title">about_</h3>
                <p className="about-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p>
            </div>
            <div className="about-right">
                <img className="leo-about-img" alt="about image" src={LeoMelo} />
            </div>
         </div>
      )
    }
  }

export default About;
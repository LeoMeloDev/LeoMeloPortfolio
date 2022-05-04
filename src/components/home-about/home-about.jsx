import React from "react";
import LeoMelo from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/LeoMelo.jpg';

class About extends React.Component {
    render() {
      return (
          <div className="about">
            <div className="about-left">
                <h3 className="about-title">about_</h3>
                <p className="about-copy">I am a Visual Designer &amp; Front-End Web Developer, with experience in Content Creation, UX &amp; UI, Design Thinking and Digital Marketer living in London for over six years. A very enthusiastic, fast-learner and dedicated worker, my experience includes companies such as Thomson Reuters and start-ups where I was responsible for their digital assets. The combination of my Law Degree, Visual Design, Front-End Web Development and experience in Music Marketing has allowed me to work in a diverse portfolio of roles. And I am always looking for the next challenge in my career.</p>
            </div>
            <div className="about-right">
                <img className="leo-about-img" alt="about image" src={LeoMelo} />
            </div>
         </div>
      )
    }
  }

export default About;
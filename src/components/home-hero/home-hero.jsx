import React from "react";
import visualDesign from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/website-graphic-black.png';

class Hero extends React.Component {
    render() {
      return (
          <div className="hero">
            <div className="hero-left">
                <h1 className="hero-title">Leo Melo</h1>
                <h2 className="hero-subtitle">Visual and Web Des<span className="italic-letter">i</span>gner_</h2>
            </div>
            <div className="hero-right">
                <img className="web-graphic" alt="Desktop" src={visualDesign} />
            </div>
         </div>
      )
    }
  }

export default Hero;
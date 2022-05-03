import React from "react";
import About from '../home-about/home-about';
import Hero from '../home-hero/home-hero'
import Work from '../home-work/home-work';

class Home extends React.Component {
    render() {
      return (
         <div>
            <Hero /> 
            <About />
            <Work />
         </div>
      )
    }
  }

export default Home;
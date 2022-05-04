import React from "react";
import DPMWeb from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DPM-Web-Sample.png';
import Arkle from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/arkle.png';
import ContinuumEconomics from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/continuum-economics.png';
import LondonGinger from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/the-london-ginger.png';

class WebDevelopment extends React.Component {
    render() {
      return (
          <div className="web-development">
                <h3 className="web-development-title">web development_</h3>
                <p className="web-development-copy">Front-End Development in HTML, CSS, Javascript, including in React, these are some of the freelance and permanent role projects that I have worked for during the past 6 years in the field.</p>
                
                <hr/>

                {/* DPM */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Dental Practice Manager</h4>
                        <p className="project-copy">Dental Practice Manager is a web magazine dedicated to helping dental practice managers access the latest updates, guidance and practical advice. Built in Wordpress, this website counts with subscription options using MemberPress and WooCommerce.</p><br/><br/> 
                        <a className="web-link" href="https://www.dentalpracticemanager.co.uk/">Visit Link</a>
                    </div>
                    <div className="project-right">
                        <img className="project-img-dev" alt="Dental Practice Manager Web Image Sample" src={DPMWeb} />
                    </div>
                </div>
         
                {/* Arkle */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Arkle Property Services</h4>
                        <p className="project-copy">Arkle Property Services provides maintenance and refurbishment services to residential, commercial and estate properties across London. Website created using HTML, CSS and Javascript.</p><br/><br/> 
                        <a className="web-link" href="https://www.arklps.co.uk/">Visit Link</a>
                    </div>
                    <div className="project-right">
                        <img className="project-img-dev" alt="Arkle Sample" src={Arkle} />
                    </div>
                </div>

                {/* Continuum Economics */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Continuum Economics</h4>
                        <p className="project-copy">Continuum Economics is an independent macroeconomic, policy and financial markets research firm. Website created in HTML, CSS (Bootstrap) and Javascript.</p><br/><br/> 
                        <a className="web-link" href="https://www.continuumeconomics.com/">Visit Link</a>
                    </div>
                    <div className="project-right">
                        <img className="project-img-dev" alt="Continuum Economics Image Sample" src={ContinuumEconomics} /> 
                    </div>
                </div>

                {/* The London Ginger */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">The London Ginger</h4>
                        <p className="project-copy">Built in Wordpress, The London Ginger is a website dedicated to lifestyle, fashion, travel and more.</p><br/><br/> 
                        <a className="web-link" href="http://www.thelondonginger.com/">Visit Link</a>
                    </div>
                    <div className="project-right">
                        <img className="project-img-dev" alt="The London Ginger Image Sample" src={LondonGinger} />
                    </div>
                </div>
         </div>

         
      )
    }
  }

export default WebDevelopment;
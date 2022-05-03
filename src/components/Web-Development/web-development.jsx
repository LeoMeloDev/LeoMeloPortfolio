import React from "react";
import DPMWeb from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DPM-Web-Sample.png';

class WebDevelopment extends React.Component {
    render() {
      return (
          <div className="web-development">
                <h3 className="web-development-title">web development_</h3>
                <p className="web-development-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p>
                
                <hr/>

                {/* SQFT */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Dental Practice Manager</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                        <a className="web-link" href="https://www.dentalpracticemanager.co.uk/">Visit Link</a>
                    </div>
                    <div className="project-right">
                        <img className="project-img-dev" alt="Dental Practice Manager Web Image Sample" src={DPMWeb} />
                    </div>
                </div>
         
                {/* Bucket List Music UK */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Bucket List Music UK</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        {/* <img className="project-img" alt="Bucket List Music Image Sample" src={} /> */}
                    </div>
                </div>

                {/* Dental Practice Manager */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Dental Practice Manager</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        {/* <img className="project-img" alt="Dental Practice Manager Image Sample" src={} /> */}
                    </div>
                </div>
         </div>

         
      )
    }
  }

export default WebDevelopment;
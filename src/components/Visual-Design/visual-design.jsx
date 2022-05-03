import React from "react";
import SQFT from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/SQFT - Metrics Entered - Overview.png';
import BLMUK from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/Desktop - BLMUK1.png';
import DPM from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/Dental Practice Manager Desktop.png'

class VisualDesign extends React.Component {
    render() {
      return (
          <div className="visual-design">
                <h3 className="visual-design-title">visual design_</h3>
                <p className="visual-design-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p>
                
                <hr/>

                {/* SQFT */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">SQFT Capital</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        <img className="project-img" alt="SQFT Capital Image Sample" src={SQFT} />
                    </div>
                </div>
         
                {/* Bucket List Music UK */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Bucket List Music UK</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        <img className="project-img" alt="Bucket List Music Image Sample" src={BLMUK} />
                    </div>
                </div>

                {/* Dental Practice Manager */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Dental Practice Manager</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        <img className="project-img" alt="Dental Practice Manager Image Sample" src={DPM} />
                    </div>
                </div>
         </div>

         
      )
    }
  }

export default VisualDesign;
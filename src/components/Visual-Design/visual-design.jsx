import React from "react";
import SQFT from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/SQFT - Metrics Entered - Overview.png';
import BLMUK from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/Desktop - BLMUK1.png';
import DPM from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/Dental Practice Manager Desktop.png'

class VisualDesign extends React.Component {
    render() {
      return (
          <div className="visual-design">
                <h3 className="visual-design-title">visual design_</h3>
                <p className="visual-design-copy">Exploring mood boards, colours, fonts and values, my work in Visual Design is focused on achieving the best web experience for the user.</p>
                
                <hr/>

                {/* SQFT */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">SQFT Capital</h4>
                        <p className="project-copy">Hired to improve their online app for the construction and real estate market, I worked together with the SQFT Capital team to achieve their main goals for the project: a more visually engaging format for their application, as well an intuitive interface for any user can understand the process.</p> 
                    </div>
                    <div className="project-right">
                        <img className="project-img" alt="SQFT Capital Image Sample" src={SQFT} />
                    </div>
                </div>
         
                {/* Bucket List Music UK */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Bucket List Music UK</h4>
                        <p className="project-copy">A website dedicated to music reviews, they were looking for a more modern interface that would allow the visitor easy access to the latest music reviews, as well as more intuitive access to previous reviews. This project included a research into the best fonts and colours for easy readability and more engaging content.</p> 
                    </div>
                    <div className="project-right">
                        <img className="project-img" alt="Bucket List Music Image Sample" src={BLMUK} />
                    </div>
                </div>

                {/* Dental Practice Manager */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Dental Practice Manager</h4>
                        <p className="project-copy">Dental Practice Magazine is an online magazine that hosts a series of different content types, including articles, videos, podcasts, and others. This project included a research into the best fonts and structure to allow new subscribers the ability to easily create an account and access the full extent of content.</p> 
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
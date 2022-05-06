import React from "react";



class VideoWork extends React.Component {
    render() {
      return (
          <div className="video-work">
                <h3 className="video-work-title">video_</h3>
                <p className="video-work-copy">Along with Photography work, Curating Moments also offers videography for weddings, events and content.</p>
                
                <hr/>

                {/* Wedding */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Fernanda &amp; Richard Civil Wedding</h4>
                        <p className="project-copy">Along with pictures for their special day, Curating Moments created this short video with highlights of their wedding day. Filmed using Fujifilm and DJI cameras, and edited in Final Cut Pro.</p> 
                    </div>
                    <div className="project-right">
                        <iframe src="https://player.vimeo.com/video/582677822?h=01b8eb274e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Fernanda &amp;amp; Richard Civil Wedding"></iframe>
                    </div>
                </div>

                {/* Lake District */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Lake District - Aerial View</h4>
                        <p className="project-copy">Join us on an aerial view of one of the most beautiful and iconic places in the United Kingdom. Filmed using DJI Drone and Edited in Final Cut Pro.</p> 
                    </div>
                    <div className="project-right">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9pCYdAcx1P8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
         
                {/* Sloane Square */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Sloane Square - ft. The London Ginger - a.k.a. Raquel Sol</h4>
                        <p className="project-copy">A stroll through Sloane Square in London, capturing images of Raquel Sol as she walks through the streets of west London. Filmed using DJI camera and Edited in Final Cut Pro.</p> 
                    </div>
                    <div className="project-right">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IXUCk4P70rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

               
         </div>

         
      )
    }
  }

export default VideoWork;
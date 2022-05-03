import React from "react";



class VideoWork extends React.Component {
    render() {
      return (
          <div className="video-work">
                <h3 className="video-work-title">video_</h3>
                <p className="video-work-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p>
                
                <hr/>

                {/* Wedding */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Fernanda &amp; Richard Civil Wedding</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        <iframe src="https://player.vimeo.com/video/582677822?h=01b8eb274e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Fernanda &amp;amp; Richard Civil Wedding"></iframe>
                    </div>
                </div>
         
                {/* Bucket List Music UK */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Sloane Square - ft. The London Ginger - a.k.a. Raquel Sol</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
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
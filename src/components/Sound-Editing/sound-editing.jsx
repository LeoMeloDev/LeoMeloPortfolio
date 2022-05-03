import React from "react";


class SoundEditing extends React.Component {
    render() {
      return (
          <div className="sound-editing">
                <h3 className="sound-editing-title">sound editing_</h3>
                <p className="sound-editing-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p>
                
                <hr/>

                {/* Chilling Tales */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Chilling Tales For Dark Nights</h4>
                        <p className="project-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sapien sed purus viverra, quis posuere mauris malesuada. Morbi ex dolor, luctus sodales tristique vitae, tristique non lorem. Vestibulum in lacinia erat, a finibus arcu. Nunc neque lacus, volutpat vel leo sit amet, pretium pulvinar ligula.</p> 
                    </div>
                    <div className="project-right">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KEimmk3WiB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
         

               
         </div>

         
      )
    }
  }

export default SoundEditing;
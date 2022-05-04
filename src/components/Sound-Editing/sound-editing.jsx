import React from "react";


class SoundEditing extends React.Component {
    render() {
      return (
          <div className="sound-editing">
                <h3 className="sound-editing-title">sound editing_</h3>
                <p className="sound-editing-copy">Keeping in touch with my background in audio engineering, my work includes podcast production and mixing.</p>
                
                <hr/>

                {/* Chilling Tales */}
                <div className="project">
                    <div className="project-left">
                        <h4 className="project-title">Chilling Tales For Dark Nights</h4>
                        <p className="project-copy">Audio horror entertainment on podcasts and YouTube, featuring a wide variety of tales professionally voice acted and set to music and SFX.</p> 
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
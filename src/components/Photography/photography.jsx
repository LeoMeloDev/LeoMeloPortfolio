import React from "react";
import CM1 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF0110.jpg';
import CM2 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF0248.jpg';
import CM3 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF0441.jpg';
import CM4 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF0806.jpg';
import CM5 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF2364.jpg';
import CM6 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF2496.jpg';
import CM7 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF2941.jpg';
import CM8 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF4543.jpg';
import CM9 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF4602.jpg';
import CM10 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF4750.jpg';
import CM11 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF4926.jpg';
import CM12 from '/Users/leomelo/Documents/react-projects/my-site-v1-2022/src/img/DSCF9940.jpg';

class Photography extends React.Component {
    render() {
      return (
          <div className="photography">
                <h3 className="photography-title">photography_</h3>
                <p className="photography-copy">Photography for events, weddings and content creation. Equipment includes Fujifilm cameras XT-3 and XT-4.</p>
                
                <hr/>

                <div className='img-gallery'>
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM1} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM2} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM3} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM4} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM5} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM6} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM7} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM8} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM9} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM10} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM11} />
                    <img className="img-in-gallery" alt="Curating Moments images" src={CM12} />
                </div>

               
         </div>

         
      )
    }
  }

export default Photography;
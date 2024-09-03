import React from 'react';
//import { Link,useNavigate } from 'react-router-dom';
import './About.css';
import pngIcon from './geethesh2.jpg';
// import Footer from '../Footer/Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser } from '@fortawesome/free-solid-svg-icons'

import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Aboutus() {

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="motionTop" id="about" ref={ref} >
      
        <h1>About me <FontAwesomeIcon icon={faUser} /></h1>
        <div className='img_tag'>
        <img src={pngIcon}  alt="Icon"/>
        </div>
       
      <div className='about'>
            <p>Hi there!👋 I am Geethesh kulal from kasaragod, an enthusiastic person with a passion of technology and in interested in developing projects. Seeking a competitive position to enhance my skills and contribute to a professional organization interest.
Feel free to explore our portfolio to see some of the projects we've worked on. If you have any questions or would like to collaborate, don't hesitate to provide contact information or a link to the contact section</p>
        
        </div>

    {/* <Footer/> */}
        
    </div>
  )
}
export default Aboutus;

import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome,  faFacebook,faTwitter,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div>
<div class="footer">
    <ul class="social-icon">
    <li class="social-icon__item">
    {/* <a className='social-icon_link' href='#'><ion-icon name='logo-facebook'></ion-icon></a> */}
    <a className='social-icon_link' href='#'><FontAwesomeIcon icon={faFacebook} className="my-icon" /></a>
    </li>

    <li class="social-icon__item">
         <a className='social-icon_link' href='#'><FontAwesomeIcon icon={faTwitter} className="my-icon" /></a>
    </li>

    <li class="social-icon__item">
         <a className='social-icon_link' href='https://www.linkedin.com/in/geethesh-kulal-929419228'><FontAwesomeIcon icon={faLinkedin} className="my-icon"/></a>
    </li>

    <li class="social-icon__item">
         <a className='social-icon_link' href='https://www.instagram.com/geethesh_kulal?igsh=MWVpYWVkaTMyc2x2aw=='><FontAwesomeIcon icon={faInstagram}className="my-icon" /></a>
    </li>
    </ul>

    <ul class="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      {/* <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li> */}
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

    </ul>

    <p>&copy;2021 geethesh_kulal | All Rights Reserved</p>
   </div>
   </div>

  );
}

export default Footer;

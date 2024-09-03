import React from "react"
import './Skill.css';
import html from '../icons/html-5.png'
import css from '../icons/css-3.png'
import js from '../icons/js.png';
import boots from '../icons/bootstrap.png';
import mysql from '../icons/mysql.png';
import react from '../icons/physics.png';
import nodejs from '../icons/nodejs.png';
import php from '../icons/php.png';
import firebase from '../icons/firebase2.png';
import c from '../icons/c.png';
import cc from '../icons/c++.png';
import python from '../icons/python.png'
import java from '../icons/java.png'
// import Footer from '../Footer/Footer.js';
import { Form } from "react-router-dom";

import { useInView } from 'react-intersection-observer';


function Skill() {


  return (
    <div className="motion" id="about" >
    <div className="inner">
      <div className="header">
        <h1>Web development</h1>
      </div>
      <div className="container">
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={html} className='web-icon' alt=""></img>
            </div>
            <h3>HTML 5</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={css} className='web-icon' alt=""></img>
            </div>
            <h3>CSS</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={boots} className='web-icon' alt=""></img>
            </div>
            <h3>BOOTSTRAP</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={mysql} className='web-icon' alt=""></img>
            </div>
            <h3>MY SQL</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={react} className='web-icon' alt=""></img>
            </div>
            <h3>REACT</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={nodejs} className='web-icon' alt=""></img>
            </div>
            <h3>Node js</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={php}  className='web-icon'alt=""></img>
            </div>
            <h3>PHP</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img"> 
            <img src={firebase} className='web-icon' alt=""></img>
            </div>
            <h3>FIREBASE</h3>
          </div>
        </div>
      </div>

<div className="header motion">
        <h1>Programming</h1>
      </div>
      <div className="container motion">
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={c} className='web-icon' alt=""></img>
            </div>
            <h3>C</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={cc} className='web-icon' alt=""></img>
            </div>
            <h3>C++</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={python} className='web-icon' alt=""></img>
            </div>
            <h3>PYTHON</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
            <img src={java} className='web-icon' alt=""></img>
            </div>
            <h3>JAVA</h3>
          </div>
        </div>


      </div>
    {/* <Footer/> */}

    </div>
    </div>

  );

}


export default Skill;

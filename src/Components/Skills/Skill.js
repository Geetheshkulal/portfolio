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

function Skill() {
  return (
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
      {/* <h1>Skills</h1>
      <div className="elements">
      <li>C</li>
        <li>C++</li>
      <li>REACT JS</li>
      <li>HTML</li>
      <li>JAVASCRIPT</li>
      <li>CSS</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>UX AND UI DESIGN</li>
      </div> */}
    </div>
  );
}

export default Skill;


import { useEffect,useState } from 'react';
import React from 'react'
import png from './icons/icon88.png';
import  {Link,useLocation}from 'react-router-dom';
import './Navbar.css';




function Navbar() {
const [mobileNavBar,setMobileNavBar]=useState(false);
const [activeNav,setActiveNav]=useState(true);

const location=useLocation();

useEffect(()=>{
  setActiveNav(location.pathname);

},[location]);
//this is how you create the function 

const hamburger=(value)=>{
  setMobileNavBar(value);
}


  return (
<>

<div className="topnavigation" id="myTopnav">
 
  <div className='desktop_2'>



{
  activeNav=="/"?
  ""
  :
  <a href="home" class="active" className='nav-link'><Link className='home' to={'/'}>Home</Link></a>
}


 {
  activeNav=="/Aboutus"?
  ""
  :
  <a href="about" className='nav-link'><Link className='aboutus' to={'/Aboutus'}>About</Link></a>
 }
 {
   activeNav=="/Skill"?
   ""
   :
  <a href="skill" className='nav-link'><Link className='aboutus' to={'/Skill'}>Skill</Link></a>
 }
 {
   activeNav=="/Contact"?
   ""
   :
  <a href="contact" className='nav-link'><Link className='aboutus' to={'/Contact'}>Contact</Link></a>
 }
  {
   activeNav=="/quali"?
   ""
   :
  <a href="quali" className='nav-link'><Link className='aboutus' to={'/quali'}>Qualification</Link></a>
 }

{
   activeNav=="/projects"?
   ""
   :
  <a href="projects" className='nav-link'><Link className='projects' to={'/Projects'}>Projects</Link></a>
 }


  </div>
  



{!mobileNavBar?
  <div className='hamburger'>
    <img src={png} className='icon' onClick={()=>hamburger(true)} alt=""></img>
  </div>
  :
  ""
}

{mobileNavBar?

<div className=''>
  <div id='mysidebar' className='sidebar'>
    <span className='closebtn' onClick={()=>hamburger(false)}>&times;</span>

    {
  activeNav=="/"?
  ""
  :
  <a href="home" class="active"><Link className='home' to={'/'} onClick={()=>hamburger(false)}>Home</Link></a>
}
{
  activeNav=="/Aboutus"?
  ""
  :
  <a href="about"><Link className='aboutus' to={'/Aboutus'} onClick={()=>hamburger(false)}>About</Link></a>
 }
 {
   activeNav=="/Skill"?
   ""
   :
  <a href="skill"><Link className='aboutus' to={'/Skill'} onClick={()=>hamburger(false)}>Skill</Link></a>
 }
 {
   activeNav=="/Contact"?
   ""
   :
  <a href="contact"><Link className='aboutus' to={'/Contact'} onClick={()=>hamburger(false)}>Contact</Link></a>
 }
  {
   activeNav=="/quali"?
   ""
   :
  <a href="quali" ><Link className='aboutus' to={'/quali'} onClick={()=>hamburger(false)}>Qualification</Link></a>
 }

{
   activeNav=="/projects"?
   ""
   :
  <a href="projects" ><Link className='projects' to={'/projects'} onClick={()=>hamburger(false)}>Projects</Link></a>
 }

  </div>
  </div>
  :
  ""
}
</div>

</>


);
}
export default Navbar;

import React from 'react'
import Aboutus from './Aboutus/Aboutus'
import Skill from './Skills/Skill'
import Projects from './Projects/projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import  Quali from './Qualification/quali';
// import  Qu from './Qu';

function Home() {
  return (
    <div>
      <Aboutus />
      <Skill />
      <Projects/>
      <Quali/>
      <Contact/>
      <Footer />
      {/* <Qu /> */}
    </div>
  )
}

export default Home;

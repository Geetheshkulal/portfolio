import React from 'react'
import Aboutus from './Aboutus/Aboutus'
import Skill from './Skills/Skill'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import  Quali from './Qualification/quali';

function Home() {
  return (
    <div>
      <Aboutus />
      <Skill />
      <Quali />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

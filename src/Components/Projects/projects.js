import React from 'react';
import './projects.css'
import portfolio from '../icons/portfolio.png'
import news from '../icons/news.png'
import capture from '../icons/capture.png'
import blood from '../icons/blood.png'

function projects() {
 
  return (
    <>
    <h1>projects</h1>
    <div class="ProjectContainer motion">
  <div class="motionProject">
    <div class="content">

      <div class="item">
        <img src={news} alt="Portrait Photography" />
        <p class="item-title">News Portal</p>
        <p class="item-description"><a href='https://newsportal2.vercel.app/'>View news portal</a></p>
      </div>

      <div class="item">
        <img src={portfolio} alt="Landscape Photography" />
        <p class="item-title">Portfolio</p>
        <p class="item-description"><a href="https://geetheshkulal-portfolio.netlify.app/">geetheshkulal-portfolio</a></p>
      </div>

      <div class="item">
        <img src={blood} alt="Wedding Photography" />
        <p class="item-title">Blood Bank Management</p>
        <p class="item-description"><a href='https://github.com/Geetheshkulal/BloodBank'>Github</a></p>
      </div>

      <div class="item">
        <img src={capture} alt="Wedding Photography" />
        <p class="item-title">Photography landing page</p>
        <p class="item-description"><a href='https://github.com/Geetheshkulal/photography-landingpage/tree/master'>Github</a> </p>
      </div>

    </div>
  </div>
</div>

    </>
  )
}
export default projects;

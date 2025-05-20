import React from 'react'
import Header from '../Component/Header/Header'
import HomeSection from '../Component/HomeSection'
import Courses from './Courses/Courses'
import AboutVereda from './About/AboutVereda'
import Footer from '../Component/Footer/Footer'
import StatsSection from '../Component/StatsSection/StatsSection'

export default function HomePage() {
  return (
   <>
 
   <div id="home">
        <HomeSection />
      </div>
   <div id="courses">
  <Courses></Courses>
   </div>
   <div id="about">
    <AboutVereda></AboutVereda>
   </div>
   <StatsSection></StatsSection>

   <Footer></Footer>
   </>
  )
}

import React from 'react'
import HomePage from './Home'
import AboutPage from '../Components/About'
import ProjectsPage from '../pages/Projects'
import ContactPage from '../pages/Contact'
import Services from './Services'
import SmoothScroll from '../Components/SmoothScroll'

const Main = () => {
  return (
    <main>
      <SmoothScroll />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <Services/>
      <ContactPage />
    </main>
  )
}

export default Main
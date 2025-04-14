import React from 'react'
import HomePage from './Home'
import AboutPage from '../Components/About'
import ProjectsPage from '../pages/Projects'
import ContactPage from '../pages/Contact'
import Services from './Services'

const Main = () => {
  return (
    <div>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <Services/>
        <ContactPage />
    </div>
  )
}

export default Main
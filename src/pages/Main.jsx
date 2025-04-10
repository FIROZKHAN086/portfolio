import React from 'react'
import HomePage from './Home'
import AboutPage from '../Components/About'
import ProjectsPage from '../pages/Projects'
import ContactPage from '../pages/Contact'

const Main = () => {
  return (
    <div>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
    </div>
  )
}

export default Main
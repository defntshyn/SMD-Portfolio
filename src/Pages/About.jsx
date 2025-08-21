import React from 'react'
import Profile from '../components/About/Profile.jsx'
import Skills from '../components/About/Skills.jsx'
import Abouts from '../components/About/About.jsx'
import Experience from '../components/About/Experience.jsx'
import FadeInSection from '../components/FadeInSection.jsx'

const About = () => {
  return (
    <>
      <FadeInSection>
        <Profile />
      </FadeInSection>

      <FadeInSection>
        <Abouts />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>
      
      <FadeInSection>
        <Experience />
      </FadeInSection>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default About
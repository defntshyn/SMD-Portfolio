import React from 'react'
import './AboutStyle.css';
import Picture from '/assets/Intern-1.png'
import Picture2 from '/assets/Intern-2.png'
import Picture3 from '/assets/Intern-3.png'

const Experience = () => {
  return (
    <div className="experience">
        <h3>Experience</h3>
        <br /><br />
        <h4>Big Pond PH</h4>
        <h5>Student Intern</h5>        
        <div className="experience-list">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I completed my internship at Big Pond PH, where I was responsible for creating website designs before implementation. I mainly designed interfaces using Figma, and occasionally used Canva for specific elements and illustrations. I implemented these designs through website builders such as Wix, WordPress, and Shopify. Since not all features were available in these platforms, I sometimes applied custom code using their built-in coding options. This internship helped me strengthen my design and development skills, and also taught me the value of collaboration, as my co-interns often consulted me on design drafts before submitting them to our supervisor.</p>
            <img src={Picture}/>
        </div>
        <div className="experience-list">
            <img src={Picture2}/>
            <img src={Picture3}/>
        </div>
    </div>
  )
}

export default Experience
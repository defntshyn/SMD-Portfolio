import React from 'react'
import './AboutStyle.css';
import skills from '../../data/skills.js'

const Skills = () => {
  return (
    <>
      <div className="skill">
        <h3>Skills</h3>
        <br />
        <p id='descript'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have experience in different creative and technical fields, but I always see myself as a work in progress. Every project I take on is an opportunity to learn and improve my skills while helping others bring their ideas to life.</p>
        <br /><br />
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-container">
              <h4>
                {skill.name}
                <span>
                  {skill.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </span>
              </h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{skill.description}</p>
              <p className="tags">Tags:
                <ul>
                  {skill.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
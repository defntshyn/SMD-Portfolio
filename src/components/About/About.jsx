import React from 'react'
import './AboutStyle.css';
import Picture from '/assets/Shayne.png'

const About = () => {
    return (
        <div className="about-description">
            <h3>About</h3>
            <div className="about-list">
                <img id='about-first' src={Picture} />
                <p id="description">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm Shayne, a
                22-year-old from Pasig City, Philippines. I’m an aspiring front-end web developer
                and UI/UX designer with a passion for creating clean, user-friendly, and visually
                appealing digital experiences.
                <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I recently completed my Bachelor of Science in Information Technology at
                the University of the East - Manila. Throughout my studies, I built a solid foundation in web
                development, with a particular interest in front-end technologies and design principles. I’ve always
                enjoyed turning ideas into simple, functional, and visually appealing websites. Along the way, I’ve also
                picked up a range of other skills, which you can explore here. I'm continuously learning and aiming to
                create user-friendly web applications that make a positive impact.
            </p>
            </div>
        </div>
    )
}

export default About
import React from 'react'
import Picture from '/assets/Me2.png';
import Cat from '/assets/cat.svg';
import Cat2 from '/assets/Cat2.png';

import './AboutStyle.css';

const Profile = () => {
  return (
    <>
      <br /><br />
      <div className="profile">
        <div className="profile-container">
          <img src={Picture} />
          <img src={Cat} id='cat' />
        </div>
        <div className="profile-details">
          <h2>Shayne Danos</h2>
          <p>Theres beauty in simplicity...</p>
        </div>
        <img src={Cat2} id='cat2' />
      </div>
    </>
  )
}

export default Profile
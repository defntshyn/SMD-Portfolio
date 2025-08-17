import React from 'react'
import Picture from '/assets/Baler.png'
import Picture1 from '/assets/UE.jpg'
import Picture2 from '/assets/Aria.png'
import Picture3 from '/assets/ARIA/Main.png'
import Picture4 from '/assets/ARIA/Settings.png'
import Picture5 from '/assets/ARIA/Sonus.png'
import Picture6 from '/assets/POS/DASHBOARD.png'
import Picture7 from '/assets/POS/REPORTS.png'
import Picture8 from '/assets/Homepage.png'
import Picture9 from '/assets/Programs.png'
import Picture10 from '/assets/About Us.png'

const Work = () => {
    return (
        <div className="work-content">
            <div className="work-image">
                <img src={Picture} />
            </div>
            <h2>Reservation System</h2>
            <p className='tags'>
                <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>SQL</li>
                </ul>
            </p>
            <div className="work-image-list">
                <img src={Picture10} />            
                <img src={Picture1} />
                <img src={Picture2} />                          
                <img src={Picture1} />
                <img src={Picture8} />
                <img src={Picture2} />            
                <img src={Picture3} />
                <img src={Picture5} />
                <img src={Picture4} />            
                <img src={Picture7} />
                <img src={Picture6} />
                <img src={Picture9} />  
            </div>
        </div>
    )
}

export default Work
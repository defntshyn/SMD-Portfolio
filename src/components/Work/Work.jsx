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
            <div className="heading">
                <h2>Reservation System</h2>
                <p className='tags'>Tags:
                    <ul>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>SQL</li>
                    </ul>
                </p>
            </div>
            <br /><br />
            <h3>Description:</h3>
            <p className="description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates iusto quasi iste earum suscipit soluta, eos eveniet vitae natus quae, ullam atque aspernatur officia harum reiciendis dolorum consequuntur est? <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, unde a temporibus blanditiis molestiae expedita illo, veniam similique facilis magnam amet minima quos. Ullam, architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quasi suscipit iure asperiores in magni at illum? Incidunt dicta asperiores temporibus dolorem, porro delectus quas in quisquam perferendis, deserunt molestias!
            </p>
            <br /><br /><br />
            <h3>Preview:</h3>
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
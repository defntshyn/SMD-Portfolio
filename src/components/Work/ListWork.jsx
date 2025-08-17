import React from 'react'
import './WorkStyle.css'
import Picture from '/assets/Baler.png'
import Picture1 from '/assets/UE.jpg'
import Picture2 from '/assets/Aria.png'

const ListWork = () => {
    return (
        <>
            <div className="work-content">
                <h3>Website Development</h3>
                <div className="list">
                    <div className="list-item">
                        <img src={Picture} />
                        <h5>Reservation System</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture1} />
                        <h5>Enrollment System</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture2} />
                        <h5>Aria Prototype</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture} />
                        <h5>Reservation System</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture1} />
                        <h5>Enrollment System</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture2} />
                        <h5>Aria Prototype</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture} />
                        <h5>Reservation System</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture1} />
                        <h5>Enrollment System</h5>
                    </div>
                    <div className="list-item">
                        <img src={Picture2} />
                        <h5>Aria Prototype</h5>
                    </div>
                </div>
            </div>
            <div className="work-content">
                <h3>UI Design</h3>
                <div className="list">

                </div>
            </div>
        </>
    )
}

export default ListWork
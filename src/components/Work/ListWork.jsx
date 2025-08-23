import React from 'react'
import { useNavigate } from "react-router-dom";
import './WorkStyle.css'
import worksWeb from '../../data/worksWeb.js'
import worksUI from '../../data/worksUI.js'
import worksForm from '../../data/worksForm.js'
import worksOther from '../../data/worksOther.js'

const ListWork = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="work-content">
                <h3>Website Development</h3>
                <div className="list">
                    {worksWeb.map((web, index) => (
                        <div key={index} className="list-item">
                            <img src={web.bannerImage} />
                            <div className="short-description">
                                <h5>{web.name}</h5>
                                <p>{web.shortDescription}</p>
                                <button onClick={() => navigate(`/works/${web.id}`)}>Navigate to content</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="work-content">
                <h3>UI Design</h3>
                <div className="list">
                    {worksUI.map((ui, index) => (
                        <div key={index} className="list-item">
                            <img src={ui.bannerImage} />
                            <div className="short-description">
                                <h5>{ui.name}</h5>
                                <p>{ui.shortDescription}</p>
                                <button onClick={() => navigate(`/works/${ui.id}`)}>Navigate to content</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="work-content">
                <h3>Forms</h3>
                <div className="list">
                    {worksForm.map((form, index) => (
                        <div key={index} className="list-item">
                            <img src={form.bannerImage} />
                            <div className="short-description">
                                <h5>{form.name}</h5>
                                <p>{form.shortDescription}</p>
                                <button onClick={() => navigate(`/works/${form.id}`)}>Navigate to content</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="work-content">
                <h3>Arts and Designs</h3>
                <div className="list">
                    {worksOther.map((other, index) => (
                        <div key={index} className="list-item">
                            <img src={other.bannerImage} />
                            <div className="short-description">
                                <h5>{other.name}</h5>
                                <p>{other.shortDescription}</p>
                                <button onClick={() => navigate(`/works/${other.id}`)}>Navigate to content</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default ListWork
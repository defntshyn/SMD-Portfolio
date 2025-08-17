import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import FeatureCarousel from '../../other/FeatureCarousel.jsx'

const Feature = () => {

    return (
        <div className="content">
            <div className="content-tech">
                <h3>Featured Works</h3>
                <FeatureCarousel />
            </div>
        </div>
    )
}

export default Feature
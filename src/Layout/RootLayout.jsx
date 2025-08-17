import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'


const RootLayout = () => {
    return (
        <>
            <Navigation />
            <div className="content-container">
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout
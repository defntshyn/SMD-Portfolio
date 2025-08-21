import React from 'react'
import { useNavigate } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection';

const Error = () => {

  const navigate = useNavigate();

  return (
    <FadeInSection>
      <div className="error-container">
        <h1>404 | Page Not Found</h1>
        <h5>The page you’re looking for doesn’t exist or may have been moved.</h5>
        <button onClick={() => navigate('/')}>Go back home</button>
      </div>
    </FadeInSection>
  )
}

export default Error
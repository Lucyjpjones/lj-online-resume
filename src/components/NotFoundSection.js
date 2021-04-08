import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import './styles/HeroSection.css'

function NotFoundSection(props) {

    return (
        <div className="hero-container">
            <h1>
                <span className="underline--text" style={{'margin':'auto', 'width':'fit-content'}}>404</span>
                <span>Page not found</span>
            </h1>
            <div>
                <Link to='/' className='nav-links btn-cv'>
                    Home
                </Link>
            </div>
        </div>
    )
}

export default NotFoundSection

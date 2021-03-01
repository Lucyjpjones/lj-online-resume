import React from 'react'
import '../App.css'
import './HeroSection.css'

function AboutSection() {

    return (
        <div className="hero-container">
            <h1>
                <span className="underline--text">About Me</span>
            </h1>
            <a href='#aboutme' className='arrow'>
                <i className="fas fa-angle-double-down fa-3x bounce" style={{marginTop:'100px', color:'#B7CCB7'}}></i>
            </a>
        </div>
    )
}

export default AboutSection

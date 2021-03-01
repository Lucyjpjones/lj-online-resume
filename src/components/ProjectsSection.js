import React from 'react'
import '../App.css'
import './HeroSection.css'

function ProjectsSection() {

    return (
        <div className="hero-container">
            <h1>
                <span className="underline--text">Portfolio</span>
            </h1>
            <a href='#projects' className='arrow'>
                <i className="fas fa-angle-double-down fa-3x bounce" style={{marginTop:'100px', color:'#B7CCB7'}}></i>
            </a>
        </div>
    )
}

export default ProjectsSection
import React from 'react'
import '../App.css'
import './HeroSection.css'

function ContactSection() {

    return (
        <div className="hero-container">
            <h1>
                <span className="underline--text">Contact</span>
            </h1>
            <a href='#contact-form' className='arrow'>
                <i className="fas fa-angle-double-down fa-3x bounce" style={{marginTop:'100px', color:'#B7CCB7'}}></i>
            </a>
        </div>
    )
}

export default ContactSection
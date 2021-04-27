import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe'
import TitleSection from '../TitleSection'

function About() {
    return (
        <>
            <TitleSection title='About me' navlink='#aboutme' />
            <AboutMe data-aos="slide-up" data-aos-duration='800'/>
        </>
    )
}

export default About

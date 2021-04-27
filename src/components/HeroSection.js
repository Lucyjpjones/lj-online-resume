import React, { useState } from 'react'
import ITyped from 'react-ityped';
import '../App.css'
import './styles/HeroSection.css'
import { RiDownloadLine } from "react-icons/ri";

function HeroSection() {

    const textStrings = ['Front End Developer', 'Back End Developer', 'Full Stack Developer']

    const [innerText, setInnerText] = useState(false);

    return (
        <div className="hero-container">
            <h1>
                <span>I am</span>
                <span>Lucy Jones</span>
            </h1>
            <ITyped className='typing-text'
                showCursor={false}
                strings={textStrings}
                typeSpeed={150}
                backSpeed={50}
                startDelay={100}
                backDelay={150}
            />
            <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href={process.env.PUBLIC_URL + '/files/Resume-LucyJPJones.pdf'} 
                    className='btn-cv' 
                    onMouseEnter={() => setInnerText(true)}
                    onMouseLeave={() => setInnerText(false)} >
                        {innerText ? <RiDownloadLine color= "#fcc0c3" size="1em" /> : <div>Get CV</div>}
                </a>
        </div>
    );
}

export default HeroSection

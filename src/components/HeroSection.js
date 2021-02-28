import React, { useState, useEffect } from 'react'
import ITyped from 'react-ityped';
import { Button } from './Button';
import '../App.css'
import './HeroSection.css'

// function HeroSection() {
//     const [text, setText] = useState("")
//     const [fullText, setFullText] = useState("Full Stack Web Developer")
//     const [index, setIndex] = useState(0)

//     useEffect(() => {
//         if (index < fullText.length) {
//             setTimeout(() => {
//                 setText(text + fullText[index])
//                 setIndex(index + 1)
//             }, 180)
//         }
//     }, [index])

const HeroSection = () => {

    const textStrings = ['Front End Developer', 'Back End Developer', 'Full Stack Developer', 'Based in London']

    return (
        <div id='homepage' className="hero-container">
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
            <a target="_blank" rel="noreferrer" href={process.env.PUBLIC_URL + 'files/Resume-LucyJPJones.pdf'} className='btn btn--primary'>Get CV</a>
        </div>
    );
}

//     return (
//         <div className="hero-container">
//             <h1>
//                 <span>I am</span>
//                 <span>Lucy Jones</span>
//             </h1>
//             <p>{text}</p>
//             <a target="_blank" rel="noreferrer" href='files/Resume-LucyJPJones.pdf' className='btn btn--primary'>Get CV</a>
//         </div>
//     )
// }

export default HeroSection

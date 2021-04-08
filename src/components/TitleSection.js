import React from 'react'
import { BsChevronDoubleDown } from "react-icons/bs";
import '../App.css'
import './styles/HeroSection.css'

function TitleSection(props) {

    return (
        <div className="hero-container">
            <h1>
                <span className="underline--text">{props.title}</span>
            </h1>
            <a href={props.navlink} className='arrow'>
                <BsChevronDoubleDown className="fa-3x bounce" style={{marginTop:'100px', color:'#B7CCB7'}}/>
            </a>
        </div>
    )
}

export default TitleSection

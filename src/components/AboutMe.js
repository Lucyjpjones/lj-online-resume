import React from 'react'
import '../App.css'
import './styles/HeroSection.css'
import './styles/About.css'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

function AboutMe() {

    return (
        <div id='aboutme' className='content-container'>
            <img src={process.env.PUBLIC_URL + '/images/profile-img.jpg'} alt='profile' className='profile-img' />
            <div className='about-me'>
                <h2 style={{'marginBottom':10}}>Hey i'm Lucy</h2>
                <h3 style={{'marginBottom':10}}>I'm a full stack developer based in London.</h3>
                <h4>I enjoy turning code into beautiful, simple designs. When I'm not coding, you'll find me on holiday with a Gin, running a 5k or in a downward dog.</h4>
            </div>
                <div className='nav-links-social'>
                <ul className='social-icons'>
                    <li className='social-icon-link'>
                        <a target="_blank" rel="noreferrer" href='https://github.com/Lucyjpjones'>
                            <AiOutlineGithub className="shake" size="30px" color="#476A6F" />
                        </a>
                    </li>
                    <li className='social-icon-link'>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lucy-jones-1304/'>
                            <AiOutlineLinkedin className="shake" size="30px" color="#476A6F" />
                        </a>
                    </li>
                    <li className='social-icon-link'>
                        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/lucyjpj/?hl=en'>
                            <AiOutlineInstagram className="shake" size="30px" color="#476A6F" />
                        </a>
                    </li>
                    <li className='social-icon-link'>
                        <a target="_blank" rel="noreferrer" href="mailto:lucyjpjones@gmail.com?subject=Resume%20Enquiry">
                            <AiOutlineMail className="shake" size="30px" color="#476A6F" />
                        </a>
                    </li>
                </ul>
                </div>
        </div>
    )
}

export default AboutMe

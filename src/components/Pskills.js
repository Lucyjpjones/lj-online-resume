import React, { useState, useEffect } from 'react'
import '../App.css'
import './HeroSection.css'

function Pskills() {

    return (
        <section id='skills'>
            <div className='about-me' style={{'width':'60%', 'marginBottom':50}}>
                <h3 style={{'marginBottom':20, 'width': '100%'}}>Personal Skills</h3>
                <ul>
                    <li><i className='fas fa-check'></i> Communication</li>
                    <li><i className='fas fa-check'></i> Teamwork</li>
                    <li><i className='fas fa-check'></i> Attention to Detail</li>
                    <li><i className='fas fa-check'></i> Creativy</li>
                    <li><i className='fas fa-check'></i> Time Management</li>
                </ul>
            </div>
        </section>
    )
};

export default Pskills

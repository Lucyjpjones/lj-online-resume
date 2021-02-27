import React, { useState, useEffect } from 'react'
import '../App.css'
import './HeroSection.css'

function Skills() {

    return (
        <section id='skills'>
            <div className='about-me' style={{'width':'60%', 'marginBottom':50}}>
                <h3 style={{'marginBottom':20, 'width': '100%'}}>Technical Skills</h3>
                <div style={{textAlign:'center'}}>
                    <i className='fab fa-html5 fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fab fa-css3 fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fab fa-js fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fab fa-python fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fas fa-gem fa-md' style={{color:'#476A6F', padding: 10}}></i>
                </div>
                <ul>
                    <li><i class="fas fa-project-diagram"></i> Django</li>
                    <li><i class="fas fa-project-diagram"></i> MongoDB</li>
                    <li><i class="fas fa-project-diagram"></i> Flask</li>
                    <li><i className='fas fa-database'></i> SQL</li>
                    <li><i className='fas fa-database'></i> Postgres</li>
                    <li><i className='fas fa-edit'></i> Balsamiq</li>
                    <li><i className='fas fa-edit'></i> Bootstrap</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills

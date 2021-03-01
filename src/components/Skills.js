import React from 'react'
import '../App.css'
import './HeroSection.css'

function Skills() {

    return (
        <div id='skills'>
            <div className='about-me' style={{'width':'60%', 'marginBottom':50}}>
                <h3 style={{'marginBottom':20, 'width': '100%'}}>Technical Skills</h3>
                <div style={{textAlign:'center'}}>
                    <i className='fab fa-html5 fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fab fa-css3 fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fab fa-js fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fab fa-python fa-md' style={{color:'#476A6F', padding: 10}}></i>
                    <i className='fas fa-gem fa-md' style={{color:'#476A6F', padding: 10}}></i>
                </div>
                <br />
                <ul>
                    <li className='about-list-item'><i class="fas fa-project-diagram" style={{'paddingBottom':10}}></i> 
                        <p>Django</p>
                        <p>Flask</p>
                        <p>MongoDB</p>
                    </li>
                    <br />
                    <li className='about-list-item'><i className='fas fa-database' style={{'paddingBottom':10}}></i>
                        <p>SQL</p>
                        <p>Postgres</p>
                    </li>
                    <br />
                    <li className='about-list-item'><i className='fas fa-edit' style={{'paddingBottom':10}}></i> 
                        <p>User Stories</p>
                        <p>Balsamiq</p>
                        <p>Bootstrap</p>
                        <p>Materialize</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills

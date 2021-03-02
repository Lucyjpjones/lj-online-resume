import React from 'react'
import '../App.css'
import './HeroSection.css'
import ListGroup from 'react-bootstrap/ListGroup'

function Skills() {

    return (
        <div id='skills'>
            <div className='about-me' style={{'marginBottom':50}}>
                <h3 style={{'marginBottom':20, 'width': '100%'}}>Technical Skills</h3>
                <div style={{textAlign:'center'}}>
                    <img src={process.env.PUBLIC_URL + '/images/skills/css.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/html.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/js.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/python.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/ruby.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/git.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/vs.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/dj.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/react.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/flask.jpg'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/node.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/mongodb.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/materialize.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/balsamiq.png'} alt='css' className='skill-icon' />
                    <img src={process.env.PUBLIC_URL + '/images/skills/bootstrap.png'} alt='css' className='skill-icon' />
                </div>
            </div>
        </div>
    )
}

export default Skills

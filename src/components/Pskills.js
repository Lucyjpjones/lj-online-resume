import React from 'react'
import '../App.css'
import './HeroSection.css'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pskills() {

    return (
        <div id='pskills'>
            <div className='about-me' style={{'marginBottom':50}}>
                <h3 style={{'marginBottom':20, 'width': '100%'}}>Personal Skills</h3>
                <div>
                    <span className='progress-type'>Communication</span>
                    <ProgressBar now={95} />
                    <span className='progress-type'>Teamwork</span>
                    <ProgressBar now={90} />
                    <span className='progress-type'>Attention to Detail</span>
                    <ProgressBar now={80} />
                    <span className='progress-type'>Problem Solving</span>
                    <ProgressBar now={75} />
                    <span className='progress-type'>Creativity</span>
                    <ProgressBar now={70} />
                </div>
            </div>
        </div>
    )
};

export default Pskills

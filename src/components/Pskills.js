import React from 'react'
import '../App.css'
import './HeroSection.css'
import Rating from 'react-rating'

function Pskills() {

    return (
        <section id='pskills'>
            <div className='about-me' style={{'width':'60%', 'marginBottom':50}}>
                <h3 style={{'marginBottom':20, 'width': '100%'}}>Personal Skills</h3>
                <ul>
                    <li className='about-list-item'><i className='fas fa-check'></i> Communication
                    <Rating readonly={true} start={0} stop={5} step={1} initialRating={4} empty={"rating"} full={"rating"}/>
                    </li>
                    <li className='about-list-item'><i className='fas fa-check'></i> Teamwork</li>
                    <li className='about-list-item'><i className='fas fa-check'></i> Attention to Detail</li>
                    <li className='about-list-item'><i className='fas fa-check'></i> Creativy</li>
                    <li className='about-list-item'><i className='fas fa-check'></i> Time Management</li>
                </ul>
            </div>
        </section>
    )
};

export default Pskills

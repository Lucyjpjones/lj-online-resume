import React from 'react'
import '../App.css'
import './Cards.css';
import './HeroSection.css'
import CardItem from './CardItem';

function ProjectCards() {
    return (
      <div id='projects' className='hero-container'>
        <h2>Check out my latest projects!</h2>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={process.env.PUBLIC_URL + '/images/resume.png'}
                text='
                A resume site built from pure HTML and CSS'
                label='HTML & CSS'
                path='https://github.com/Lucyjpjones/LucyJones-resume'
              />
              <CardItem
                src={process.env.PUBLIC_URL + '/images/BRITbrAIN.png'}
                text='An interactive map-based quiz game built mainly with Javascript'
                label='HTML, CSS & JS'
                path='https://github.com/Lucyjpjones/LucyJones-BRITbrAIN'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={process.env.PUBLIC_URL + '/images/WeanCuisine.png'}
                text='A recipe site that allows users to connect, explore, and share their weaning recipes.'
                label='Python & Flask'
                path='https://github.com/Lucyjpjones/wean-cuisine'
              />
              <CardItem
                src={process.env.PUBLIC_URL + '/images/fscr.png'}
                text='FSCR focuses on providing structured and detailed fitness programmes for football-related injuries.'
                label='Python & Django'
                path='https://github.com/Lucyjpjones/lj-fscr'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default ProjectCards
import React, { useState, useEffect } from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import '../App.css'
import './HeroSection.css'
import WorkHistory from './WorkHistory'
import Education from './Education'
import Skills from './Skills'
import Pskills from './Pskills'

function AboutMe() {

    return (
        <div id='aboutme' className='hero-container'>
            <img src={process.env.PUBLIC_URL + '/images/profile-img.jpg'} alt='profile' className='profile-img' />
            <div className='about-me'>
                <h2 style={{'marginBottom':10}}>Hey i'm Lucy</h2>
                <h3 style={{'marginBottom':10}}>I'm a Full Stack Developer based in London.</h3>
                <h4>I enjoy turning code into beautiful, simple designs. When I'm not coding, you'll find me on a holiday with a Gin, running a 5k or in a downward dog.</h4>
            </div>
            <Tabs style={{'width': '100%'}}>
                <TabList className='about-icons'>
                <Tab style={{'display':'none'}}>
                </Tab>
                <Tab>
                    <i class="about-icon fas fa-graduation-cap fa-lg shake"></i>
                </Tab>
                <Tab>
                    <i class="about-icon fas fa-briefcase fa-lg shake"></i>
                </Tab>
                <Tab>
                    <i class="about-icon fas fa-code fa-lg shake"></i>
                </Tab>
                <Tab>
                    <i class="about-icon fas fa-user fa-lg shake"></i>
                </Tab>
                </TabList>

                <TabPanel>
                </TabPanel>
                <TabPanel>
                    <h2>
                        <Education />
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2>
                        <WorkHistory />
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2>
                        <Skills />
                    </h2>
                </TabPanel>
                <TabPanel>
                    <Pskills />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default AboutMe

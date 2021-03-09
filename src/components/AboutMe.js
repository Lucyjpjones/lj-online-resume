import React from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { IoSchoolOutline, IoPersonOutline } from "react-icons/io5";
import '../App.css'
import './HeroSection.css'
import './About.css'
import WorkHistory from './WorkHistory'
import Education from './Education'
import TechSkills from './TechSkills'
import PersonalSkills from './PersonalSkills'

function AboutMe() {

    return (
        <div id='aboutme' className='content-container'>
            <img src={process.env.PUBLIC_URL + '/images/profile-img.jpg'} alt='profile' className='profile-img' />
            <div className='about-me'>
                <h2 style={{'marginBottom':10}}>Hey i'm Lucy</h2>
                <h3 style={{'marginBottom':10}}>I'm a full stack developer based in London.</h3>
                <h4>I enjoy turning code into beautiful, simple designs. When I'm not coding, you'll find me on holiday with a Gin, running a 5k or in a downward dog.</h4>
            </div>
            <Tabs style={{'width': '100%'}}>
                <TabList className='about-icons'>
                <Tab style={{'display':'none'}}>
                </Tab>
                <Tab>
                    <IoSchoolOutline className="about-icon fa-size fshake"/>
                </Tab>
                <Tab>
                    <BsBriefcase className="about-icon fa-size shake" />
                </Tab>
                <Tab>
                    <BsCodeSlash className="about-icon fa-size shake" />
                </Tab>
                <Tab>
                    <IoPersonOutline className="about-icon fa-size shake" />
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
                        <TechSkills />
                    </h2>
                </TabPanel>
                <TabPanel>
                    <PersonalSkills />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default AboutMe

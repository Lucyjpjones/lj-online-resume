import React from 'react'
import '../../App.css'
import TitleSection from '../TitleSection'
import ProjectCards from '../ProjectCards'

function Projects() {
    return (
        <>
            <TitleSection title='Portfolio' navlink='#projects' />
            <ProjectCards />
        </>
    )
}

export default Projects
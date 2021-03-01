import React from 'react'
import '../../App.css'
import TitleSection from '../TitleSection'
import ContactForm from '../ContactForm'

function Contact() {
    return (
        <>
            <TitleSection title='Contact' navlink='#contact-form' />
            <ContactForm />
        </>
    )
}

export default Contact
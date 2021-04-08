import React, { useState } from 'react'
import '../App.css'
import './styles/HeroSection.css'
import './styles/ContactForm.css'
import emailjs from 'emailjs-com';

function ContactForm() {

    const [firstName, setFirstName] = useState("") 
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm(
          'lucyjpjones@gmail.com',
          'lucy',
          e.target,
          'user_qZ2fQYOyvPucFHRyubh33')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
      <div id='contact-form' className='content-container'>
          <div className='contact-container' >
            <h2 style={{'fontSize':'30px', 'marginBottom':10}}>Get in Touch</h2>
            <h3 style={{'fontSize':'16px', 'marginBottom':20}}>
                Whether you have a question, want to hire me or just want to connect, please feel free to send me a message.
            </h3>
            <form className="contact-form" onSubmit={sendEmail} >
                <div className="field-names">
                    <div className='field field-name'>
                        <label>First Name</label>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" />
                    </div>
                    <div className='field field-name'>
                        <label>Last Name</label>
                        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastName" />
                    </div>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" />
                </div>
                <div className='field'>
                    <select  value={topic} name='topic' onChange={e => setTopic(e.target.value)}>
                        <option value='' disabled>-- Choose topic --</option>
                        <option value='Hire me'>Hire me</option>
                        <option value='Project Request'>Project Request</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='field'>
                    <label>Message</label>
                    <textarea className='field' value={message} onChange={e => setMessage(e.target.value)} name="message" />
                </div>
                <input type="submit" value="Send Message" />
            </form>
        </div>
      </div>
    );
  }

export default ContactForm

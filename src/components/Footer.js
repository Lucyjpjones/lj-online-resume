import React from 'react'
import './Footer.css';

function Footer() {

    return (
        <>
        <footer className="footer-container">
              <ul className='social-icons'>
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href='https://github.com/Lucyjpjones'>
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lucy-jones-1304/'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/lucyjpj/?hl=en'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </li>
              </ul>
        </footer>
        </>
    )
}

export default Footer

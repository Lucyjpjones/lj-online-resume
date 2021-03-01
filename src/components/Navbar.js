import Hamburger from 'hamburger-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className='menu-icon'>
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#B7CCB7" />
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-links-social'>
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
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar

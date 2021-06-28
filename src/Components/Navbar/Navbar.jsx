import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../../resources/LogoIco.ico';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img alt="logo" height="40em" width="100em" src={logo}></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ?
                            <FontAwesomeIcon icon={faTimes} />
                            :
                            <FontAwesomeIcon icon={faBars} />
                        }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-links" onClick={closeMobileMenu}>
                                NOSOTROS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/programas" className="nav-links" onClick={closeMobileMenu}>
                                PROGRAMAS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

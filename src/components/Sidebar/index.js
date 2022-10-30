import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='subtitle' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ""}>
            <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            activeclassname="active" 
            to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            onClick={() => setShowNav(false)}
            // exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            onClick={() => setShowNav(false)}
            // exact="true" 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
            >
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            onClick={() => setShowNav(false)}
            // exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/anthonypwest/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/anthowest'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://open.spotify.com/user/124467801?si=300382caad604b09'
                >
                    <FontAwesomeIcon icon={faSpotify} color="#4d4d4e" />
                </a>
            </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
    </div>
    )
}

export default Sidebar
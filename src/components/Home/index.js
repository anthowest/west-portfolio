import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-a.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['n', 't', 'h', 'o', 'n', 'y']
    const jobArray = [
        's',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'e',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
    ]

    setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img 
                src={LogoTitle} 
                alt="engineer" 
                />
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={19}
                />
                </h1>
                <h2>Software Engineer / Entrepreneur</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
                {/* <Logo /> */}
            </div>

            <Loader type='pacman' />
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home
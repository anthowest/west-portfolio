import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)

    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e',]}
                        idx={15}
                    />
                </h1>
                <p>I am a Software Engineer who is skilled in both the front-end and back-end of web applications. As an outgoing and supportive team player, I am committed to developing solutions in collaboration with my team to achieve the highest standard of excellence. I’m an introspective critical-thinker with an eye for opportunities to learn new trends and technologies to further improve my team.</p>

                <p>After completing my Bachelor degree in business administration from the University of North Texas, I decided to put my outgoing personality and analytical-thinking skills to work as an Operations Director. Few years later, I was promoted to a Project Manager implementing software applications for a healthcare organization. It was in this role that I sharpened my communication skills in client meetings, increased my tech knowledge, and streamlined processes by implementing and developing software applications; increasing revenue by $5 million in my first year. Working in operations and software has given me an invaluable foundation, and I further added to it by getting my certification in software engineering from General Assembly. Now I’m ready to move forward with being part of even larger solutions as an engineer.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
    )
}

export default About
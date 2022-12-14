import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_fo5t5ka',
                'template_e29uyua',
                refForm.current,
                'yB1hyFeN7HIVe7puh'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again.')
                }
            )

    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in career and freelance opportunities - especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the form below.
                    </p>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/anthonypwest/'
                        >
                        <FontAwesomeIcon icon={faLinkedin} color="#ffd700" />
                    </a>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://github.com/anthowest'
                        >
                        <FontAwesomeIcon icon={faGithub} color="#ffd700" />
                    </a>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Anthony West,
                    <br />
                    Dallas, TX
                    <br />
                    USA 
                    <br />
                    <span>anthowest14@gmail.com</span>
                </div> 
                <div className='map-wrap'>
                    <MapContainer center={[32.7767, -96.7970]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[32.7767, -96.7970]}>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact
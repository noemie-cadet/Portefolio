import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const ContactArray = [
    'C',
    'o',
    'n',
    't',
    'a',
    'c',
    't',
    'e',
    'z',
    ' ',
    'm',
    'o',
    'i',
    '!',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [letterClass])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={ContactArray}
              idx={15}
            />
          </h1>
          <div className="row-line">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
              color="#212E53"
              fontSize="27px"
            />
            <p className="text">noemie.cadet@epitech.eu</p>
          </div>
          <div className="row-line">
            <FontAwesomeIcon
              className="icon"
              icon={faPhone}
              color="#212E53"
              fontSize="27px"
            />
            <p className="text">0692 29 45 48</p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/noemiecadet/"
          >
            <div className="row-line">
              <FontAwesomeIcon
                className="icon"
                icon={faLinkedin}
                color="#212E53"
                fontSize="27px"
              />
              <p className="text">LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Contact

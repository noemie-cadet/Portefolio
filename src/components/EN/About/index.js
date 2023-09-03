import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const AboutArray = [
    'A',
    'b',
    'o',
    'u',
    't',
    ' ',
    'm',
    'e'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [letterClass])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={AboutArray}
            idx={15}
          />
        </h1>
        <p>
        I am an ambitious student in computer science from 5th year to
          Epitech, my personality is distinguished by a passion for
          technological advances. My enthusiasm is focused
          particularly in the field of 3D technology, encompassing
          three-dimensional printing and the creation of virtual models. My
          insatiable thirst for learning and improvement pushes me to
          constantly meet new challenges, thus continuously expanding
          my skills and my know-how.
        </p>
        <br />
        <p>
        With web design skills, I bring to my
          projects a harmonious balance between creativity and skills
          techniques. My background in Front-end allows me to
          Shape digital experiences that visually and
          guarantee user-friendliness and accessibility. My background allowed me to
          cultivate a balanced approach, where every visual element is
          carefully designed to offer a user experience
          exceptional, while being supported by a technical base.
        </p>
        <br />
        <p>
        My strong interest in 3D modeling and printing
          the ability to give life to
          virtual concepts. Thanks to last year at Keimyung University and
          my personal experience, I learned to navigate through the
          modeling tools, shaping creations that merge
          aesthetics and functionality. My skills in this area
          convert abstract ideas into virtual objects or
          concrete realities.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="ball-scale" />
    </>
  )
}

export default About

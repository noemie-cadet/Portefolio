import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const AboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

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
            Epitech, My enthusiasm focuses mainly on the field of 3D technology.
            My enthusiasm focuses on particularly in the field of 3D technology,
            encompassing 3D printing and creating virtual models. I am also
            passionate about front end, CSS and other languages of styles are
            for me tools to express my creativity. My insatiable thirst for
            learning and improvement pushes me to constantly meet new
            challenges, thus expanding by my skills and knowledge.
          </p>
          <br />
          <p>
            With web design skills, I bring to my projects a harmonious mix of
            creativity and skills techniques. My background in Front-end
            development allows me to create Visually engaging and user-friendly
            online experiences. I developed this balanced approach by working on
            various professional, academic and personal projects, where every
            element visual is meticulously designed to offer an experience
            exceptional user.
          </p>
          <br />
          <p>
          My passion for 3D modeling and 3D printing stems from
            my fascination for transforming virtual ideas into objects
            The year I spent at Keimyung University as well as
            my personal experiences allowed me to explore in depth
            modelling tools. This immersion helped me to develop
            solid expertise in the creation of three-dimensional models.
            What makes this experience even more exciting is my
            ability to bring abstract concepts to life. My
            3D modeling allow me to take an idea and bring it to life in the form of a model
            virtual detailed. Moreover, thanks to 3D printing, I can
            transcend the digital to create concrete physical objects to
            from these virtual models.
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

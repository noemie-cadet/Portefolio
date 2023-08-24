import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const AboutArray = [
    'A',
    ' ',
    'p',
    'r',
    'o',
    'p',
    'o',
    's',
    ' ',
    'd',
    'e',
    ' ',
    'm',
    'o',
    'i',
    ' ',
    '!',
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
          Je suis une étudiante ambitieuse en informatique de 5ème année à
          Epitech, ma personnalité se distingue par une passion pour les
          avancées technologiques. Mon enthousiasme se concentre
          particulièrement sur le domaine de la technologie 3D, englobant
          l'impression tridimensionnelle et la création de modèles virtuels. Mon
          insatiable soif d'apprentissage et d'amélioration me pousse à
          constamment relever de nouveaux défis, élargissant ainsi en permanence
          mes compétences et mon savoir-faire.
        </p>
        <br />
        <p>
          Dotée de compétences en conception de sites Web, j'apporte à mes
          projets un équilibre harmonieux entre créativités et compétences
          techniques. Mon bagage de connaissances en Front-end me permet de
          façonner des expériences numériques qui captivent visuellement et
          garantissent convivialité et accessibilité. Mon parcours m'a permis de
          cultiver une approche équilibrée, où chaque élément visuel est
          soigneusement pensé pour offrir une expérience utilisateur
          exceptionnelle, tout en étant soutenu par une base technique.
        </p>
        <br />
        <p>
          Mon intérêt prononcé pour la modélisation en 3D et l'impression
          tridimensionnelle se traduit par une aptitude à donner vie à des
          concepts virtuels. Grâce à l'année passée à Keimyung University et à
          mon expérience personnelle, j'ai appris à naviguer à travers les
          outils de modélisation, façonnant des créations qui fusionnent
          esthétisme et fonctionnalité. Mes compétences dans ce domaine me
          permettent de convertir des idées abstraites en objets virtuels ou en
          réalités concrètes.
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

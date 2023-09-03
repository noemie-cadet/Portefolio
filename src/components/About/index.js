import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
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
            Epitech, Mon enthousiasme se focalise principalement sur le domaine de la technologie 3D. Mon enthousiasme se concentre
            particulièrement sur le domaine de la technologie 3D, englobant
            l'impression 3D et la création de modèles virtuels. Je suis
            également passionné de front end, le CSS et autres langages de
            styles sont pour moi des outils pour exprimer ma créativité. Mon
            insatiable soif d'apprentissage et d'amélioration me pousse à
            constamment relever de nouveaux défis, élargissant ainsi en
            permanence mes compétences et mon savoir-faire.
          </p>
          <br />
          <p>
            Avec des compétences en conception de sites Web, j'apporte à mes
            projets un mélange harmonieux de créativité et de compétences
            techniques. Mon bagage en développement Front-end me permet de créer
            des expériences en ligne visuellement captivantes et conviviales.
            J'ai développé cette approche équilibrée en travaillant sur divers
            projets professionnels, académiques et personnels, où chaque élément
            visuel est méticuleusement pensé pour offrir une expérience
            utilisateur exceptionnelle.
          </p>
          <br />
          <p>
            Ma passion pour la modélisation en 3D et l'impression 3D découle de
            ma fascination pour la transformation d'idées virtuelles en objets
            tangibles. L'année que j'ai passée à Keimyung University ainsi que
            mes expériences personnelles m'ont permis d'explorer en profondeur
            les outils de modélisation. Cette immersion m'a aidé à développer
            une expertise solide dans la création de modèles tridimensionnels.
            Ce qui rend cette expérience encore plus excitante, c'est ma
            capacité à concrétiser des concepts abstraits. Mes compétences en
            modélisation 3D me permettent de prendre une idée et de la donner vie sous la forme d'un modèle
            virtuel détaillé. De plus, grâce à l'impression 3D, je peux
            transcender le numérique pour créer des objets physiques concrets à
            partir de ces modèles virtuels.
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

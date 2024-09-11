import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import BirdGifs from '../../assets/gifs/bird.gif'
import DragonGifs from '../../assets/gifs/dragon1.gif'
import Dragon2Gifs from '../../assets/gifs/dragon2.gif'
import MuteOFF from '../../assets/gifs/MuteOFF.gif'
import Embout from '../../assets/images/embout.png'
import Moule from '../../assets/images/moule.png'
import Rasoir from '../../assets/images/rasoir.png'

const Study = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const StudyArray = [
    'M',
    'o',
    'n',
    ' ',
    'p',
    'a',
    'r',
    'c',
    'o',
    'u',
    'r',
    's',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [letterClass])

  return (
    <div className="container study-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={StudyArray}
            idx={15}
          />
        </h1>
        <h2>
          <text>Studio Paillette</text>
          <text className="sub">Mars 2024 - Sept 2024</text>
        </h2>
        <text className="sub">
          Développement et maintenance des fonctionnalités Front End du site
          marchand, avec optimisation de la base de code et création d'outils
          internes. Participation à l'amélioration de la qualité du code avec le
          CTO (Tests, CI/CD).
          <br /> <ul>Astro / Tailwind</ul>{' '}
        </text>
        <h2>
          <text>Epitech</text>
          <text className="sub"> 2019 - 2024</text>
        </h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.muteoff.software/"
        >
          <img className="mfgif" src={MuteOFF} alt="gif" />
          <p>
            MuteOFF - Faciliter la communication pour les autistes non-verbaux.
          </p>
        </a>
        <text className="sub">
          Developpeur front-end (Mobile & Web) / Design du LOGO <br />{' '}
          <ul>
            {' '}
            <li>Web : Nextjs / Tailmind </li>
            <li>Mobile : React Native / NativeWind</li>
          </ul>
        </text>
        <div className="text-zone__separator"></div>
        <h2>
          <text>Filiz</text>
          <text className="sub">Oct 2023 - Mars 2024</text>
        </h2>
        <text className="sub">
          Maintenance et ajout de fonctionnalités à la plateforme selon les
          besoins admin et client.
          <br /> <ul>NextJS / Redux</ul>{' '}
        </text>
        <div className="text-zone__separator"></div>
        <h2>
          <text>Keimyung University</text>
          <text className="sub">Sept 2022 - Juill 2023</text>
        </h2>
        <div className="row-line">
          <img className="gif" src={BirdGifs} alt="gif" />
          <img className="gif" src={DragonGifs} alt="gif" />
          <img className="gif" src={Dragon2Gifs} alt="gif" />
        </div>
        <p>
          Cours de modélisation et d'animations / Conception de jeu vidéo
          2D/3D/VR
        </p>
        <div className="text-zone__separator"></div>
        <h2>
          <text>Futur3D</text>
          <text className="sub">Sept 2021 - Juill 2022</text>
        </h2>
        <text className="sub">Web maintenance/ Conception 3D </text>
        <div className="row-line">
          <img className="gif" src={Embout} alt="gif" />
          <img className="gif" src={Moule} alt="gif" />
          <img className="gif" src={Rasoir} alt="gif" />
        </div>
        <div className="text-zone__separator"></div>
        <h2>
          <text>EDF Reunion</text>
          <text className="sub">Aout 2020 - Dec 2020 </text>
        </h2>
        <text className="sub">
          Developpement d'application: Conception et réalisation d'une
          application de gestion répondant au besoin de l'entreprise. <br />{' '}
          <ul>PHP / HTML</ul>
        </text>
        <div className="text-zone__separator"></div>
      </div>
    </div>
  )
}

export default Study

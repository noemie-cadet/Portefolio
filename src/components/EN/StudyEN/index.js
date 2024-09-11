import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import BirdGifs from '../../../assets/gifs/bird.gif'
import DragonGifs from '../../../assets/gifs/dragon1.gif'
import Dragon2Gifs from '../../../assets/gifs/dragon2.gif'
import MuteOFF from '../../../assets/gifs/MuteOFF.gif'
import Embout from '../../../assets/images/embout.png'
import Moule from '../../../assets/images/moule.png'
import Rasoir from '../../../assets/images/rasoir.png'

const Study = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const StudyArray = ['S', 't', 'u', 'd', 'i', 'e', 's', ' ', 'a', 'n', 'd']
  const StudyArray2 = ['e', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']

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
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={StudyArray2}
            idx={15}
          />
        </h1>
        <h2>
          <text>Studio Paillette</text>
          <text className="sub">March 2024 - Sept 2024</text>
        </h2>
        <text className="sub">
          Development and maintenance of the Front End functionalities of the
          site, with optimisation of the code base and creation of internal
          tools. Participation in improving code quality with the CTO (Tests,
          CI/CD).
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
            MuteOFF - Facilitate communication for non-verbal autistic people.
          </p>
        </a>
        <text className="sub">
          Front-end development (Mobile & Web) / LOGO design
          <br />{' '}
          <ul>
            <li>Web : Nextjs / Tailmind </li>
            <li>Mobile : React Native / NativeWind</li>
          </ul>
        </text>
        <div className="text-zone__separator"></div>
        <h2>
          <text>Filiz</text>
          <text className="sub">Oct 2023 - March 2024</text>
        </h2>
        <text className="sub">
          Maintenance and addition of functionalities to the platform according
          to admin and customer needs.
          <br /> <ul>NextJS / Redux</ul>{' '}
        </text>
        <div className="text-zone__separator"></div>
        <h2>
          <text>Keimyung University</text>
          <text className="sub">Sep 2022 - Jul 2023</text>
        </h2>
        <div className="row-line">
          <img className="gif" src={BirdGifs} alt="gif" />
          <img className="gif" src={DragonGifs} alt="gif" />
          <img className="gif" src={Dragon2Gifs} alt="gif" />
        </div>
        <p>Modeling and animation course/ 2D/3D/VR video game design</p>
        <div className="text-zone__separator"></div>
        <h2>
          <text>Futur3D</text>
          <text className="sub">Sep 2021 - Jul 2022</text>
        </h2>
        <text className="sub">Web maintenance/ 3D design </text>
        <div className="row-line">
          <img className="gif" src={Embout} alt="gif" />
          <img className="gif" src={Moule} alt="gif" />
          <img className="gif" src={Rasoir} alt="gif" />
        </div>
        <div className="text-zone__separator"></div>
        <h2>
          <text>EDF Reunion</text>
          <text className="sub">Aug 2020 - Dec 2020 </text>
        </h2>
        <text className="sub">
          Application development: Design and implementation of a management
          application that meets the needs of the company. <br />{' '}
          <ul>PHP / HTML</ul>
        </text>
        <div className="text-zone__separator"></div>
      </div>
    </div>
  )
}

export default Study

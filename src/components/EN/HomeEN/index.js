import LogoTitle from '../../../assets/images/logo-c.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const SalutArray = ['H', 'i',',']
  const JeArray = ['I', "'", 'm']
  const nameArray = ['a', 'd', 'e', 't', ' ', 'N', 'o', 'e', 'm', 'i', 'e']
  const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [letterClass])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={SalutArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={JeArray}
              idx={21}
            />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={28}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            />
            <br />
          </h1>
          <br />
          <h2> Front-end developer / 3D Designer</h2>
          <Link to="/contact" className="flat-button">
            Contact-me!
          </Link>
        </div>

        <Logo />
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Home

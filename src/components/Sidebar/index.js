import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoN from '../../assets/images/logo-nb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faSketch,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoN} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="study-link"
        to="/study"
      >
        <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/noemiecadet/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/noemie-cadet"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cults3d.com/fr/utilisateurs/virtion/fichiers-3d"
        >
          <FontAwesomeIcon icon={faSketch} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar

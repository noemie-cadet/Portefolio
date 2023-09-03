import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import { NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">{'</body>'}</span>
        <NavLink exact="true" activeClassName="active" to="/">
        <text className="top-link"> {'Français'} </text>
        </NavLink>

        <Outlet />

        <span className="tags bottom-tags">{'</body>'} </span>
        <br />
        <span className="tags bottom-tag-html"> {'</html'} </span>
      </div>
    </div>
  )
}

export default Layout

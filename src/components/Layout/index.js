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
        <span className="tags top-tags">{'</body>'}</span>
        <NavLink exact="true" activeClassName="active" to="/en/">
        <text className="top-link"> {'English'} </text>
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

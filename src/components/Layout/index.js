import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">{'</body>'}</span>

        <Outlet />

        <span className="tags bottom-tags">{'</body>'} </span>
        <br />
        <span className="tags bottom-tag-html"> {'</html'} </span>
      </div>
    </div>
  )
}

export default Layout

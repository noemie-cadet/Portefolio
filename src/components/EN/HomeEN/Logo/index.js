import './index.scss'
import LogoN from '../../../../assets/images/logo-n.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoN} alt="N" style={{maxWidth: '100%'}} />
    </div>
  )
}

export default Logo

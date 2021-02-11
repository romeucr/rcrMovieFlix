import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
   return (
      <header className="site-header">
         <Link to="/" className="link">
            <h1 className="header-title">MovieFlix</h1>
         </Link>
      </header>
   )   
}
export default Header

import Logo from '../../assets/logo.jpg'
import MenuData from './data'
import { HiColorSwatch } from "react-icons/hi";
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
          <a href="index.html" className='nav__logo'>
            <img src= {Logo} alt="Logo" />
          </a>
          <ul className='nav__menu'>
            {
              MenuData.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <button id='theme__icon'><HiColorSwatch/></button>
      </div>  
    </nav>
  )
}

export default Navbar
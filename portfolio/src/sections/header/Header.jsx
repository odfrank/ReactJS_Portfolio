import HeaderImage from '../../assets/header.jpg'
import HeaderData from './data'
import './header.css'

function Header() {
  return (
    <header id="header"> 
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>DamiDev Expert</h3>
        <p>You are highly welcome to my portfolio. I am a senior full-stack developer with expertise in C#/.Net and MERN platforms. Kindly reach out to me should you need any modern software solutions, and I will be very glad to help.</p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Reach Out</a>
          <a href="#portfolio" className='btn light'>My Projects</a>
        </div>
        <div className="header__socials">
          {
            HeaderData.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
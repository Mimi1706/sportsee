import "./Header.css"
import Logo from "../../Assets/Logo.png"

const Header = () => {
  return (
    <header>
      <img src={Logo} className="headerLogo" alt="Logo Sportsee"></img>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

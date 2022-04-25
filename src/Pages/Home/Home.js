import "./Home.css"
import { Link } from "react-router-dom"
import Logo from "../../Assets/Logo.png"
import ContextButton from "../../Components/ContextButton/ContextButton"

const Home = () => {
  return (
    <main className="Home">
      <img src={Logo} className="headerLogo" alt="Logo Sportsee"></img>
      <div>
        <Link to={`/dashboard/12`}>
          <button>Utilisateur 12</button>
        </Link>
        <Link to={`/dashboard/18`}>
          <button>Utilisateur 18</button>
        </Link>
      </div>
      <ContextButton />
    </main>
  )
}

export default Home

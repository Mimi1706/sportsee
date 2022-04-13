import "./SideBar.css"
import icon1 from "../../Assets/SideBar/icon1.png"
import icon2 from "../../Assets/SideBar/icon2.png"
import icon3 from "../../Assets/SideBar/icon3.png"
import icon4 from "../../Assets/SideBar/icon4.png"

const SideBar = () => {
  return (
    <div className="SideBar">
      <nav className="SideBarMenu">
        <button>
          <img src={icon1} alt="Icon" className="SideBarIcon"></img>
        </button>
        <button>
          <img src={icon2} alt="Icon" className="SideBarIcon"></img>
        </button>
        <button>
          <img src={icon3} alt="Icon" className="SideBarIcon"></img>
        </button>
        <button>
          <img src={icon4} alt="Icon" className="SideBarIcon"></img>
        </button>
      </nav>
      <span className="copyrightLabel">Copyright, Sportsee 2020</span>
    </div>
  )
}

export default SideBar

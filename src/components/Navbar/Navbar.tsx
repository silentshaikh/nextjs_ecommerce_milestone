import HeaderIcon from "../HeaderIcon/HeaderIcon";
import NavList from "../NavList/NavList";
function Navbar() {
  return (
    <nav className="flex items-center gap-10 max-[530px]:gap-0">
      <HeaderIcon/>
      <NavList/>
    </nav>
  )
}

export default Navbar

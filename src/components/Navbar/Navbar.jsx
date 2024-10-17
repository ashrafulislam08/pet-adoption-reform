import { FaRegUser } from "react-icons/fa";
import Logo from "../../assets/logo.webp";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <nav className="container mx-auto p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="" />
        <span className="font-bold text-lg">Peddy</span>
      </div>

      {/* Nav Items */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-4">
          <NavItem text={"Home"} />
          <NavItem text={"Shop"} />
          <NavItem text={"Contact"} />
        </ul>
      </div>
      {/* User/Profile */}
      <div className="border-2 border-teal-900 p-3 rounded-full">
        <FaRegUser />
      </div>
    </nav>
  );
};

export default Navbar;

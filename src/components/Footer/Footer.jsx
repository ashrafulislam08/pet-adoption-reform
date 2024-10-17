import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import Twitter from "../../assets/x.png";
import Logo from "../../assets/logo.webp";
import NavItem from "../Navbar/NavItem";
import Button from "../Button/Button";
const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-around lg:items-center w-full px-7 py-20 bg-black">
      <div className="space-y-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <span className="text-white font-bold text-lg">Peddy</span>
        </div>
        <div className="text-gray-300">
          <p>Location: Washington 165, NY CA</p>
          <p>Phone: +31 85 964 47 25</p>
          <p>Email: info@yourdomain.com</p>
          <p>Openings hours: 9.00 AM - 5.00 PM</p>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-2">
          <img className="w-8" src={Facebook} alt="" />
          <img className="w-8" src={Twitter} alt="" />
          <img className="w-8" src={Youtube} alt="" />
          <img className="w-8" src={Instagram} alt="" />
        </div>
      </div>

      {/* Useful Links */}
      <div className="my-3">
        <h3 className="font-semibold text-white lg:text-center">
          Useful Links
        </h3>
        <NavItem text={"Home"} />
        <NavItem text={"About Us"} />
        <NavItem text={"Animals"} />
        <NavItem text={"Foundation"} />
        <NavItem text={"Contact"} />
      </div>

      {/* Newsletter */}
      <div>
        <h2 className="text-white font-semibold">Drop a Message</h2>
        <input
          className="my-3 bg-slate-700 rounded-md px-3 py-2 placeholder:text-white text-white"
          type="text"
          placeholder="Enter your email"
        />{" "}
        <br />
        <Button text="SUBSCRIBE" />
      </div>
    </footer>
  );
};

export default Footer;

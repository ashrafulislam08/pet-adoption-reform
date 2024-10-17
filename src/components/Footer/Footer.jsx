import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import Twitter from "../../assets/x.png";
import Logo from "../../assets/logo.webp";
const Footer = () => {
  return (
    <footer className="w-full p-7 bg-black">
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
    </footer>
  );
};

export default Footer;

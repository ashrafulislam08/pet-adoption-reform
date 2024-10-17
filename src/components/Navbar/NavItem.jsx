const NavItem = ({ text }) => {
  return (
    <li>
      <a className="text-gray-500 font-semibold" href="">
        {text}
      </a>
    </li>
  );
};

export default NavItem;

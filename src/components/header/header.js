import Logo from "../img/Logo.svg";
import classes from "./header.module.scss";

function Header() {
  return <img src={Logo} alt="Logo" className={classes.logo} />;
}

export default Header;

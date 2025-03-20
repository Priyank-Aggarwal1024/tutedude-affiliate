import "../styles/Navbar.css";
import logo from "../assets/logo.webp";
import logos from "../assets/logo-small.svg";
function Navbar() {
  return (
    <>
      <div className="affiliate-navbar">
        <div className="an-left">
          <img className="anl-logo-small" src={logos} alt="Logo" />
          <img src={logo} className="anl-logo" alt="Logo" />
        </div>
        <div className="an-right">
          <div className="anr-login">
            <span className="anr-login-text pink-grad-text">Login</span>
          </div>
          <div className="anr-signup">Sign Up</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

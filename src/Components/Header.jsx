import Logo from "../images/logo.svg";
import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className="container header">
      <img src={Logo} alt="logo" />
      {isOpen || windowDimenion.winWidth > 700 ? (
        <div className="nav">
          <ul className="header-nav">
            <li className="nav-item">
              <a href="/#">Features</a>
            </li>
            <li className="nav-item">
              <a href="/#">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="/#">Resources</a>
            </li>
          </ul>
          <hr color="gray" />
          <ul className="header-auth">
            <li className="auth-item">
              <a href="/#">Login</a>
            </li>
            <li className="auth-item">
              <a href="/#" id="register">
                <button>Sign Up</button>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "X" : <FaBars color="black" />}
      </button>
    </div>
  );
}

export default Header;

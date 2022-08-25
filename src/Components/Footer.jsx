import "./Footer.scss";
import Logo from "../images/logo-white.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
function Footer() {
  return (
    <div className="container footer">
      <img src={Logo} alt="Logo" />
      <div className="menu">
        <nav className="menu-column">
          <h4>Features</h4>
          <ul className="footer-menu">
            <li>
              <a href="/#">Link Shortening</a>{" "}
            </li>
            <li>
              <a href="/#">Branded Links</a>
            </li>
            <li>
              <a href="/#">Analytics</a>
            </li>
          </ul>
        </nav>
        <nav className="menu-column">
          <h4>Resources</h4>
          <ul className="footer-menu">
            <li>
              <a href="/#">Blog</a>{" "}
            </li>
            <li>
              <a href="/#">Developers</a>
            </li>
            <li>
              <a href="/#">Support</a>
            </li>
          </ul>
        </nav>
        <nav className="menu-column">
          <h4>Company</h4>
          <ul className="footer-menu">
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Our Team</a>
            </li>
            <li>
              <a href="/#">Careers</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="social-media">
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={Pinterest} alt="pinterest" />
        <img src={Instagram} alt="instagram" />
      </div>
    </div>
  );
}

export default Footer;

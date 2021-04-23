import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header() {

  return (
    <div className="header-container">
      <span className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="header-logo"
            src="https://i.imgur.com/5uszXs3.png"
            alt="site logo"
            onClick={() => console.log("hello")}
          />
        </Link>
      </span>

      <div className="header-stars">
        <div class="stars"></div>
        <span class="text" data-text="TDY Readiness Tracker">
          TDY Readiness Tracker
        </span>
        <span class="gradient"></span>
        <span class="spotlight"></span>
      </div>
    </div>
  );
}

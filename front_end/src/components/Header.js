import { Link } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span class="text" data-text="TDY Readiness Tracker">
          TDY Readiness Tracker
        </span>
        <span class="gradient"></span>
        <span class="spotlight"></span>
      </Link>
    </div>
  );
}

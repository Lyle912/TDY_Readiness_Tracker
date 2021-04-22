import { Link } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>this is the header</h1>
      </Link>
    </div>
  );
}

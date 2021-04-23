import { Link } from "react-router-dom";

import "../styles/FrontPage.css";

export default function FrontPage() {
  return (
    <div className="front-page">
      <Link to="/form">
        <button className="button">TAKE ME TO THE FORM</button>
      </Link>
      <Link to="/search">
        <button className="button">TAKE ME TO THE SEARCH</button>
      </Link>
    </div>
  );
}

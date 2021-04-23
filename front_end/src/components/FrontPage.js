import { Link } from "react-router-dom";

import "../styles/FrontPage.scss";

export default function FrontPage() {
  return (
    <div>
      <div className="button-container">
        <Link to="/form">
          <button className="front-page-button">Add Member</button>
        </Link>
        <Link to="/search">
          <button className="front-page-button">Search Members</button>
        </Link>
      </div>
      <div className="front-page">
        <img
          className="header-logo"
          src="https://i.imgur.com/5uszXs3.png"
          alt="site logo"
          onClick={() => console.log("hello")}
        />
      </div>
    </div>
  );
}

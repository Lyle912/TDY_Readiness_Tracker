import "../styles/FrontPage.css";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="front-page">
      <Link to="/form">
        <button>TAKE ME TO THE FORM</button>
      </Link>
      <Link to="/search">
        <button>TAKE ME TO THE SEARCH</button>
      </Link>
    </div>
  );
}

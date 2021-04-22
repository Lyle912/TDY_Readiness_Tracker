import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import SearchPage from "./SearchPage";
import FormPage from "./FormPage";
import FrontPage from "./FrontPage";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="grid-container">
          <div className="header">
            <Route render={({ location }) =>["/"].includes(location.pathname) ? null : <Header/>}/>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/form" component={FormPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

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
      <Route render={({ location }) =>["/"].includes(location.pathname) ? null : <Header/>}/>
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/form" component={FormPage} />
          <Route exact path="/" component={FrontPage} />
        </Switch>
      </div>
    </Router>
  );
}

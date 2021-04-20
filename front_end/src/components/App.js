import '../styles/App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import SearchPage from "./SearchPage";
import FormPage from "./FormPage";
import FrontPage from "./FrontPage";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <Header />
            <SearchPage />
          </Route>
          <Route path="/form">
            <Header />
            <FormPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
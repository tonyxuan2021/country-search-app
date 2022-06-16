import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import SingleCountry from "./pages/SingleCountry";
import "./styles/_global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/country/:id" component={SingleCountry} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

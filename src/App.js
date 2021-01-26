import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutApp from "./components/Layout";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutApp>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </LayoutApp>
      </BrowserRouter>
    </div>
  );
};

export default App;

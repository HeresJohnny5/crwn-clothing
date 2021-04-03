import React from "react";
import { Switch, Route } from "react-router-dom";

// CUSTOM COMPONENTS
import Homepage from "./Pages/Homepage/Homepage";

// CUSTOM STYLES
import "./App.css";

const Hats = () => (
  <div>
    <h1>TEST HATS ROUTE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route 
          exact
          path="/"
          component={Homepage}
        />
        <Route 
          path="/shop/hats"
          component={Hats}
        />
      </Switch>
    </div>
  );
}

export default App;

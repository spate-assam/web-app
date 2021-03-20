import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
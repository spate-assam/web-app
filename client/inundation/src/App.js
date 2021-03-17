import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Disasters from "./components/Disasters";
import GoogleMap from "./admin/GoogleMap";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/disasters' component={Disasters} />
          <Route exact path='/map' component={GoogleMap} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
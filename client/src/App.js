import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import SignupStepForm from './authentication/signup/SignupStepForm';
import Navbar from "./components/Navbar";
import AdminRoute from "./authentication/protectedRoutes/AdminRoute";
import { NotFound } from "./404/NotFound";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <AdminRoute exact path='/' component={Home} />
          <Route exact path='/signup' component={SignupStepForm} />

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
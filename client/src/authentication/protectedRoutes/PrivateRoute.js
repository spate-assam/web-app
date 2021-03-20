import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../authorize";

console.log(isAuthenticated().role);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signup",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
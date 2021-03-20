import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../authorize";

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().role === 1 ? (
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

export default AdminRoute;

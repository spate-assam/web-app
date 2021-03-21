import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { isAuthenticated, signout } from '../authentication/authorize';

const Navbar = ({ history }) => {
    return (
        <Fragment>
            <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand">Navbar</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">

                        <ul class="navbar-nav">

                            {isAuthenticated() && isAuthenticated().role === 1 && (
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                            )}

                            {!isAuthenticated() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/signin"
                                        >
                                            Signin
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/signup"
                                        >
                                            Signup
                                        </Link>
                                    </li>
                                </Fragment>
                            )}

                            {isAuthenticated() && (
                                <li className="nav-item">
                                    <span
                                        className="nav-link"
                                        style={{ cursor: "pointer", color: "#ffffff" }}
                                        onClick={() =>
                                            signout(() => {
                                                history.push("/");
                                            })
                                        }
                                    >
                                        Signout
                                    </span>
                                </li>
                            )}

                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default withRouter(Navbar);
import React, { Fragment, useState, useEffect } from "react";
import Disasters from "./Disasters";
import GoogleMap from "../admin/GoogleMap";

const Home = () => {
    const [floodedLocations, setFloodedLocations] = useState([]);

    const fetchAllDisasters = () => {
        return fetch('http://localhost:5000/api/get/locations')
            .then(res => {
                return res.json();
            });
    }

    useEffect(() => {
        fetchAllDisasters().then(data => {
            setFloodedLocations(data.flooded_locations);
        });
    }, []);
    return (
        <Fragment>
            <div className="container">
                <h4>Home Page</h4>
                <Disasters floodedLocations={floodedLocations} />
                <GoogleMap floodedLocations={floodedLocations} />
            </div>
        </Fragment>
    );
}

export default Home;
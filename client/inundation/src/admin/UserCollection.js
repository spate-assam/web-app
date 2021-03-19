import React, { Fragment, useState, useEffect } from 'react';

const UserCollection = ({ users, floodedLocations }) => {
    const [affectedUsers, setAffectedUsers] = useState([]);

    // const fetchAffectedUsers = () => {
    //     return fetch(`http://localhost:5000/api/compare-distance`).then(res => {
    //         return res.json()
    //     }).catch(err => {
    //         console.log(err);
    //         return err;
    //     });
    // }

    useEffect(() => {
        // fetchAffectedUsers().then(data => {
        //     setAffectedUsers(data.distinctUsersAffcted);
        // });
    }, []);

    return (
        <Fragment>
            <h2>Compare Distance</h2>
            <button className="btn btn-secondary">
                Notify all users
            </button>
        </Fragment >
    )
}

export default UserCollection;
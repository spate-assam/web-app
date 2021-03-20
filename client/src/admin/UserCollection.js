import React, { Fragment, useState } from 'react';

import AlertMessage from '../components/AlertMessage';

const UserCollection = ({ users, floodedLocations }) => {
    const [affectedUsers, setAffectedUsers] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchAffectedUsers = () => {
        return fetch(`http://localhost:5000/api/compare-distance`).then(res => {
            return res.json()
        }).then(data => {
            setAffectedUsers(data.distinctUsersAffected);
            setSuccessMessage(data.success);
        })
            .catch(err => {
                console.log(err);
                setErrorMessage(err);
            });
    }

    const notifyUser = () => {
        return fetch(`http://localhost:5000/api/send-aware-message`).then(res => {
            return res.json()
        })
            .then(data => {
                setSuccessMessage(data.success);
            })
            .catch(err => {
                console.log(err);
                setErrorMessage(err);
            });
    }

    return (
        <Fragment>
            <AlertMessage msg={errorMessage} type="danger" ></AlertMessage>
            <AlertMessage msg={successMessage} type="success" ></AlertMessage>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={fetchAffectedUsers} className="btn btn-info m-2">
                    Check affected user
            </button>

                <button onClick={notifyUser} className="btn btn-warning m-2">
                    Notify all users
                </button>
            </div>

        </Fragment >
    )
}

export default UserCollection;
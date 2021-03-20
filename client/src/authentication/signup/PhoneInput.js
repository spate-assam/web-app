import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PhoneInput = (props) => {
	const { value, handleChange } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:5000/api/admin/signup', {
				phone: `${value.phone}`
			})
			.then(function (res) {
				console.log(res);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<Fragment>

			<div className="container">
				<form>
					<div className="mb-3">
						<label className="form-label">Name</label>
						<input
							type="text"
							value={value.name}
							onChange={handleChange('name')}
							className="form-control"
							required="required"
							placeholder="Enter name" />
					</div>

					<div className="mb-3">
						<label className="form-label">Phone No.</label>
						<input
							type="tel"
							value={value.phone}
							onChange={handleChange('phone')}
							className="form-control"
							required="required"
							placeholder="Enter phone number" />
					</div>

					<div className="mb-3">
						<label className="form-label">Default Location</label>
						<input
							type="text"
							value={value.default_loc}
							onChange={handleChange('default_loc')}
							className="form-control"
							required="required"
							placeholder="Upload your location" />
					</div>

					<div className="mb-3">
						<label className="form-label">Role</label>
						<input
							type="text"
							value={value.role}
							className="form-control"
							required="required"
							placeholder="Role" />
					</div>

					<button onClick={Continue} className="btn btn-outline-dark">
						Sign Up
					</button>
				</form>

				<p><Link to="/signin">Already have an account? Log in</Link></p>
			</div>

		</Fragment>

	);
}

export default PhoneInput;
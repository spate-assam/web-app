import React, { useState } from 'react';
import OtpVerify from './OTPVerify';
import PhoneInput from './PhoneInput';

const SignupStepForm = () => {
	const [state, setState] = useState({
		phone: '',
		code: '',
		name: '',
		default_loc: '',
		role: 1
	});

	const [step, setStep] = useState(1);

	const handleChange = (input) => (e) => {
		setState({ ...state, [input]: e.target.value });
	};

	const nextStep = () => {
		setStep(prevStep => prevStep + 1)
	};

	const prevStep = () => {
		setStep(prevStep => prevStep - 1)
	};

	const { phone, code, name, default_loc, role } = state;
	const value = { phone, code, name, default_loc, role };

	switch (step) {
		case 1:
			return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />;
		case 2:
			return <OtpVerify nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} value={value} />;
		default:
			return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />

	}
};

export default SignupStepForm;
import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/validate/index.js';
import loginCall from '../../services/loginCall.js';
import SuccessSubmit from '../../UI/succesSubmit/index.js';
import FormComponent from '../../components/form/index.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

const loginFields = [
	{
		label: 'First Name',
		name: 'username',
		type: 'text',
		placeholder: 'Silvia',
		className: 'px-3 w-full',
	},
	{
		type: 'password',
	},
];

function Login() {
	const router = useRouter();

	const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
		useState(false);
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);

		const values = [...formData.values()];
		const isEmpty = values.some(value => value === '');

		const data = Object.fromEntries(formData.entries());

		const password = data.password;

		if (isEmpty) {
			alert('Please fill all the fields');
			return;
		}
		if (!validatePassword(password)) {
			alert('Password does not meet the requirements.');
			return;
		}

		loginCall(data, setIsRegistrationSuccessful);
		router.push('/home');

		event.currentTarget.reset();
	}
	return (
		<div className="custom-gradient flex h-screen w-screen flex-col items-center justify-center">
			{!isRegistrationSuccessful ? (
				<FormComponent
					fields={loginFields}
					handleSubmit={handleSubmit}
					buttonText="Log In"
					buttonLabel="Register"
					linkInfo="/register"
					descriptionLink="Do not have an account?"
				/>
			) : (
				<SuccessSubmit />
			)}
		</div>
	);
}

export default Login;

import React, { useState } from 'react';
import { validateFields } from '../../utils/validate/index.js';
import registerCall from '../../services/registerCall.js';
import SuccessSubmit from '../../UI/succesSubmit/index.js';
import FormComponent from '../../components/form/index.js';

const registerFields = [
	[
		{
			label: 'First Name',
			name: 'username',
			type: 'text',
			placeholder: 'Silvia',
			className: '',
		},
		{
			label: 'Last Name',
			name: 'lastName',
			type: 'text',
			placeholder: 'Kenaan Mulero',
			className: '',
		},
	],
	{
		label: 'Email',
		name: 'email',
		type: 'email',
		placeholder: 'silvia.kenaan@gmail.com',
		className: 'w-full px-3',
	},
	{
		type: 'password',
	},
];

export default function Register() {
	const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
		useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const values = [...formData.values()];
		const data = Object.fromEntries(formData.entries());
		const { password, email } = data;

		const errorMessage = validateFields(values, password, email);
		if (errorMessage) {
			alert(errorMessage);
			return;
		}

		registerCall(data, setIsRegistrationSuccessful);
		event.currentTarget.reset();
	}

	return (
		<div className="flex h-screen w-screen flex-col items-center md:flex-row  md:gap-11 lg:gap-24">
			<div className="flex w-1/2 flex-col justify-end text-end font-bold max-md:hidden  md:items-end md:text-6xl md:leading-[4rem] lg:leading-[6rem] xl:text-8xl">
				<h2 className="">Be</h2>
				<h2 className="">More</h2>
				<h2 className="">Productive</h2>
			</div>
			<div className="flex h-screen flex-col items-start justify-center md:w-1/2 ">
				{!isRegistrationSuccessful ? (
					<FormComponent
						fields={registerFields}
						handleSubmit={handleSubmit}
						buttonText="Register"
						buttonLabel="Log In"
						linkInfo="/login"
						descriptionLink="Already a Member?"
					/>
				) : (
					<SuccessSubmit />
				)}
			</div>
		</div>
	);
}

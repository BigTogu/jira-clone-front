import React from 'react';
import SuccessSubmit from '../../UI/succesSubmit/index.js';
import FormComponent from '../../components/form/index.js';
import useFormSubmission from '../../services/hooks.js';
import loginCall from '../../services/authServices/login-call.js';

const loginFields = [
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

function Login() {
	const { isSubmissionSuccessful, handleSubmit, isLoading } = useFormSubmission(
		async data => {
			return await loginCall(data);
		},
	);

	return (
		<div className="custom-gradient flex h-screen w-screen flex-col items-center justify-center">
			<div aria-busy={isLoading ? 'true' : 'false'}>
				{isLoading && <div>Loading...</div>}
			</div>
			{isLoading ? (
				<div>Loading...</div>
			) : !isSubmissionSuccessful ? (
				<FormComponent
					fields={loginFields}
					handleSubmit={handleSubmit}
					buttonText="Log In"
					linkInfo={{ href: '/register', text: 'Do not have an account?' }}
				/>
			) : (
				<SuccessSubmit message="Login Successful!" />
			)}
		</div>
	);
}

export default Login;

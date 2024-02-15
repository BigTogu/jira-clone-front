import React from 'react';
import SuccessSubmit from '../../UI/succesSubmit/index.js';

import useFormSubmission from '../../hooks/hooks.js';
import loginCall from '../../services/auth-services/login-call.js';
import Form from '../../components/Common/Form/index.js';

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
				<Form
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

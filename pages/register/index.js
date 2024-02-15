import React from 'react';
import registerCall from '../../services/auth-services/register-call.js';
import SuccessSubmit from '../../UI/succesSubmit/index.js';
import Form from '../../components/Common/Form';
import useFormSubmission from '../../hooks/hooks.js';
import Slogan from '../../components/Common/Slogan/index.js';

const registerFields = [
	[
		{
			label: 'First Name',
			name: 'username',
			type: 'text',
			placeholder: 'Silvia',
		},
		{
			label: 'Last Name',
			name: 'lastName',
			type: 'text',
			placeholder: 'Kenaan Mulero',
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
	const { isSubmissionSuccessful, handleSubmit, isLoading } = useFormSubmission(
		async data => {
			return await registerCall(data);
		},
	);

	return (
		<div className="flex h-screen w-screen flex-col items-center md:flex-row  md:gap-11 lg:gap-24">
			<Slogan />
			<div className="flex h-screen flex-col items-start justify-center md:w-1/2 ">
				<div aria-live="polite">
					<div aria-busy={isLoading ? 'true' : 'false'}>
						{isLoading && <div>Loading...</div>}
					</div>
					{!isLoading && (
						<>
							{!isSubmissionSuccessful ? (
								<Form
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
						</>
					)}
				</div>
			</div>
		</div>
	);
}

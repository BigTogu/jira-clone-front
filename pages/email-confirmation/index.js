import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import emailConfirmation from '../../services/auth-services/email-confirmation.js';

function EmailConfirmation() {
	const router = useRouter();
	const { token } = router.query;

	useEffect(() => {
		if (!token) {
			console.error('missing the token parameter');
			router.push('/register');
			return;
		}

		emailConfirmation(token, router);
	}, [router, token]);

	return <div>Email-Confirmation</div>;
}

export default EmailConfirmation;

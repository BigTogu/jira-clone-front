import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EmailConfirmation() {
	const router = useRouter();
	const { token } = router.query;

	useEffect(() => {
		if (!token) {
			console.log('missing the token parameter');
			router.push('/register');
			return;
		}
		fetch(`http://localhost:8000/email-confirmation/${token}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		})
			.then(response => {
				localStorage.setItem('token', token);
				return response.json().then(() => {
					router.push('/home');
				});
			})
			.catch(error => {
				console.error(error);
			});
	}, [router, token]);

	return <div>Hola</div>;
}

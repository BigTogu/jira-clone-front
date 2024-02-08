function emailConfirmation(token, router) {
	return fetch(`http://localhost:8000/email-confirmation/${token}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				localStorage.setItem('token', token);
				router.push('/home');
				return true;
			} else {
				return false;
			}
		})
		.catch(error => {
			console.error(error);
			return false;
		});
}

export default emailConfirmation;

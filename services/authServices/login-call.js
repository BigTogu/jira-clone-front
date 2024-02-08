function loginCall(data) {
	return fetch('http://localhost:8000/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})
		.then(response => {
			if (response.ok) {
				return true;
			} else {
				return false;
			}
		})
		.catch(error => {
			console.error(error);
		});
}

export default loginCall;

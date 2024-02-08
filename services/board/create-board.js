function createBoard(data) {
	return fetch('http://localhost:8000/boards', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		body: JSON.stringify(data),
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Failed to create board');
			}
		})
		.catch(error => {
			console.error(error);
			throw error;
		});
}

export default createBoard;

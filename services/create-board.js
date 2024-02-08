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

export default createBoard;

function inviteToBoard(data) {
	return fetch('http://localhost:8000/boards/invite', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		body: JSON.stringify(data),
	});
}

export default inviteToBoard;

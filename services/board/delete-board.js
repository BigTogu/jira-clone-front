function deleteBoard(boardId) {
	return fetch(`http://localhost:8000/board?boardId=${boardId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + localStorage.getItem('token'),
		},
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

export default deleteBoard;

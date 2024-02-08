function getBoards() {
	return fetch('http://localhost:8000/boards', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + localStorage.getItem('token'),
		},
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Network response was not ok.');
			}
		})
		.then(data => {
			return data;
		})
		.catch(error => {
			console.error(
				'There has been a problem with your fetch operation:',
				error,
			);
		});
}

export default getBoards;

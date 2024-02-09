function createTodo(data) {
	return fetch('http://localhost:8000/todos', {
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
				throw new Error('Failed to create todo');
			}
		})
		.catch(error => {
			console.error(error);
			throw error;
		});
}

export default createTodo;

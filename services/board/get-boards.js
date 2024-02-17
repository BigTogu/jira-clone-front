export function getPagination(page, size) {
	const limit = size ? +size : 3;
	const offset = page ? page * limit : 0;

	return { limit, offset };
}

function getBoards(page, search) {
	const { limit, offset } = getPagination(page, 2);
	return fetch(
		`http://localhost:8000/boards?limit=${limit}&offset=${offset}&search=${search}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		},
	)
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

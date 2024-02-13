import BoardColumn from '../../pages/board/columnBoard';

function BoardStatusColumns({ todos }) {
	const statuses = ['POR HACER', 'EN CURSO', 'LISTO'];

	return (
		<div className="mt-3 flex gap-4">
			{statuses.map(status => {
				const filteredTodos = todos.filter(todo => todo.status === status);
				return (
					<BoardColumn
						key={status}
						title={status}
						todos={filteredTodos}
						status={status}
					/>
				);
			})}
		</div>
	);
}

export default BoardStatusColumns;

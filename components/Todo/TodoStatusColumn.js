import TodoColumn from './TodoColumn.js';

function TodoStatusColumn({ todos }) {
	const statuses = ['POR HACER', 'EN CURSO', 'LISTO'];

	return (
		<div className="mt-3 flex gap-4">
			{statuses.map(status => {
				const filteredTodos = todos.filter(todo => todo.status === status);
				return (
					<TodoColumn
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

export default TodoStatusColumn;

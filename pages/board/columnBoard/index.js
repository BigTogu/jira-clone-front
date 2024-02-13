import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import CreateTodoForm from '../../../components/CreateTodoForm';
import TodoItem from '../todoItem';
import { useSetAtom } from 'jotai';
import { todosAtom } from '../../../store';

function TodoList({ todos, onReorder }) {
	return (
		<Reorder.Group
			axis="y"
			values={todos}
			onReorder={onReorder}
			className="mt-4"
		>
			{todos.map(todo => (
				<Reorder.Item key={todo.id} value={todo}>
					<TodoItem content={todo.title} />
				</Reorder.Item>
			))}
		</Reorder.Group>
	);
}

function CreateButton({ onClick }) {
	return (
		<button onClick={onClick} className="text-start text-black">
			+ Crear incidencia
		</button>
	);
}

function BoardColumn({ title, todos, status }) {
	const [showCreateForm, setShowCreateForm] = useState(false);
	const setItems = useSetAtom(todosAtom);

	function handleReorder(newOrder) {
		setItems(newOrder);
	}

	return (
		<div className="flex w-1/3 flex-col rounded bg-gray-100 p-4">
			<h2 className="text-lg font-semibold">{title}</h2>
			<TodoList todos={todos} onReorder={handleReorder} />

			{showCreateForm ? (
				<CreateTodoForm
					onCancel={() => setShowCreateForm(false)}
					status={status}
				/>
			) : (
				<CreateButton onClick={() => setShowCreateForm(true)} />
			)}
		</div>
	);
}

export default BoardColumn;

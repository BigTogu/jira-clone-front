import { useRouter } from 'next/router';
import getTodos from '../../services/todos/get-todos.js';
import { useEffect, useState } from 'react';
import CreateTodoForm from '../../components/CreateTodoForm';
import { atom, useAtom } from 'jotai';

export const todosAtom = atom([]);

export default function BoardId() {
	const router = useRouter();
	const { id } = router.query;
	const [token, setToken] = useState();
	const [todos, setTodos] = useAtom(todosAtom);

	useEffect(() => {
		setToken('Bearer ' + localStorage.getItem('token'));
	}, []);

	useEffect(() => {
		getTodos(token, id).then(data => {
			if (data) setTodos(data.todos);
		});
	}, [setTodos]);

	return (
		<div className="flex  flex-col justify-between">
			{todos.map(todo => (
				<div key={todo.title} className="flex justify-between">
					<p>{todo.title}</p>
				</div>
			))}
			<p>{id}</p>
			<CreateTodoForm />
		</div>
	);
}

import { useRouter } from 'next/router';
import getTodos from '../../services/todos/get-todos.js';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import ModalButton from '../../components/Todo/InvitePeople';
import getBoard from '../../services/board/get-board.js';
import { todosAtom, boardAtom } from '../../store';
import TodoStatusColumn from '../../components/Todo/TodoStatusColumn.js';

export default function BoardId() {
	const router = useRouter();
	const { id } = router.query;

	// Estados atomos
	const [todos, setTodos] = useAtom(todosAtom);
	const [board, setBoard] = useAtom(boardAtom);

	useEffect(() => {
		async function fetchData() {
			const token = `Bearer ${localStorage.getItem('token')}`;
			if (!token || !id) return;

			try {
				const [todosResponse, boardResponse] = await Promise.all([
					getTodos(token, id),
					getBoard(id),
				]);

				if (todosResponse) setTodos(todosResponse.todos);
				if (boardResponse) setBoard(boardResponse.board);
			} catch (error) {
				console.error('Error fetching data', error);
			}
		}

		fetchData();
	}, [id, setTodos, setBoard]);

	return (
		<div className="container mx-auto p-4">
			<h1 className="mb-4 text-2xl font-bold">Tablero Board {board.key}</h1>
			<ModalButton />
			<TodoStatusColumn todos={todos} />
		</div>
	);
}

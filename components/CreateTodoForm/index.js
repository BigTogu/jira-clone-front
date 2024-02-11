import createTodo from '../../services/todos/create-todo.js';
import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';
import { todosAtom } from '../../pages/board/[id].js';

function CreateTodoForm({ onCancel }) {
	const setTodos = useSetAtom(todosAtom);
	const router = useRouter();
	const { id } = router.query;

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const formData = new FormData(event.target);
			const data = Object.fromEntries(formData.entries());
			if (!data.title.trim()) {
				console.error('The title cannot be empty.');
				return;
			}
			const newData = { ...data, boardId: id };
			const successResponse = await createTodo(newData);

			if (successResponse) {
				setTodos(todos => [...todos, successResponse.data]);
				onCancel();
			} else {
				console.error('Failed to create board');
			}
		} catch (error) {
			console.error('Error creating board:', error);
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className=" flex flex-col rounded-md bg-white px-2 pt-4 shadow "
		>
			<input
				id="TodoName"
				className="flex h-5 w-full focus:outline-none focus:ring-0"
				name="title"
				aria-required="true"
			/>

			<button
				type="submit"
				className=" py-2 text-start text-gray-500 hover:text-black"
				aria-label="Save the new board"
			>
				Guardar
			</button>
		</form>
	);
}

export default CreateTodoForm;

import createTodo from '../../services/todos/create-todo.js';
import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';
import { todosAtom } from '../../pages/board/[id].js';

function CreateTodoForm() {
	const setTodos = useSetAtom(todosAtom);
	const router = useRouter();
	const { id } = router.query;

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const formData = new FormData(event.target);
			const data = Object.fromEntries(formData.entries());
			const newData = { ...data, board_id: id };
			const successResponse = await createTodo(newData);

			if (successResponse) {
				setTodos(todos => [...todos, successResponse.data]);
			} else {
				console.error('Failed to create board');
			}
		} catch (error) {
			console.error('Error creating board:', error);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mb-2.5 flex items-center gap-3">
			<label htmlFor="boardName" className="text-right  text-base">
				Name
			</label>
			<input
				id="TodoName"
				className="flex h-5 w-full flex-1 items-center rounded-md px-2.5 text-base shadow-md"
				name="title"
				placeholder="Frontend Project"
				required
				aria-required="true"
			/>
			<div className="mt-6 flex justify-end">
				<button
					type="submit"
					className="px-4 py-2 text-black hover:bg-green-300"
					aria-label="Save the new board"
				>
					Save changes
				</button>
			</div>
		</form>
	);
}

export default CreateTodoForm;

import { useRouter } from 'next/router';
import getTodos from '../../services/todos/get-todos.js';
import { useEffect, useState, useRef } from 'react';
import CreateTodoForm from '../../components/CreateTodoForm';
import { atom, useAtom } from 'jotai';
import Modal from '../../components/Modal';
import InvitationForm from '../../components/Modal/InvitationForm';
import AssignedForm from '../../components/AssignedForm';

export const todosAtom = atom([]);

export function BoardItem({ content }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	function toggleDropdown() {
		setIsDropdownOpen(!isDropdownOpen);
	}
	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}

		if (isDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isDropdownOpen]);
	return (
		<div className="relative mb-2 flex h-[4rem] w-full flex-col rounded bg-white p-2 shadow">
			<span>{content}</span>
			<button
				onClick={toggleDropdown}
				className="flex w-full justify-end text-end"
			>
				<p className="aspect-square w-[20px] rounded-full bg-blue-200"></p>
			</button>
			{isDropdownOpen && (
				<div
					ref={dropdownRef}
					className="absolute right-[30px] top-[30px] z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg"
				>
					<div className="py-1">
						<AssignedForm />
					</div>
				</div>
			)}
		</div>
	);
}

export function BoardColumn({ title, todos, status }) {
	const [showCreateForm, setShowCreateForm] = useState(false);
	return (
		<div className="flex w-1/3 flex-col rounded bg-gray-100 p-4">
			<h2 className="text-lg font-semibold">{title}</h2>
			<div className="mt-4">
				{todos.map(todo => (
					<BoardItem key={todo.id} content={todo.title} />
				))}
			</div>{' '}
			{showCreateForm ? (
				<CreateTodoForm
					onCancel={() => setShowCreateForm(false)}
					status={status}
				/>
			) : (
				<button
					onClick={() => setShowCreateForm(true)}
					className="text-start text-black"
				>
					+ Crear incidencia
				</button>
			)}
		</div>
	);
}

export default function BoardId() {
	const router = useRouter();
	const { id } = router.query;
	const [todos, setTodos] = useAtom(todosAtom);
	const [isOpen, setIsOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const token = 'Bearer ' + localStorage.getItem('token');
		if (token && id) {
			getTodos(token, id)
				.then(data => {
					if (data) setTodos(data.todos);
				})
				.catch(error => {
					console.error('Error fetching todos', error);
					setErrorMessage('Error cargando los datos');
				});
		}
	}, [id, setTodos]);

	return (
		<div className="container mx-auto p-4">
			<h1 className="mb-4 text-2xl font-bold">Tablero BoardTitle</h1>

			<Modal
				open={isOpen}
				setOpen={setIsOpen}
				errorMessage={errorMessage}
				triggerTitle={'Invitar a personas a Mi proyecto'}
			>
				<InvitationForm
					setOpen={setIsOpen}
					onSuccess={() => {
						setIsOpen(false);
						setErrorMessage('');
					}}
				/>
			</Modal>
			<div className="mt-3 flex gap-4">
				{['POR HACER', 'EN CURSO', 'LISTO'].map(status => {
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
		</div>
	);
}

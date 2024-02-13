/* eslint-disable indent */
import { useEffect, useReducer, useCallback, useRef } from 'react';
import Modal from '../../../components/Modal';
import AssignedForm from '../../../components/AssignedForm';
import TodoModal from '../../../components/TodoModal';
import MoreTodoForm from '../../../components/MoreTodoForm';

function todoReducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_DROPDOWN':
			return { ...state, isDropdownOpen: !state.isDropdownOpen };
		case 'TOGGLE_DROPDOWN_MORE':
			return { ...state, isDropdownMoreOpen: !state.isDropdownMoreOpen };
		case 'CLOSE_DROPDOWN':
			return { ...state, isDropdownOpen: false };
		case 'CLOSE_DROPDOWNMORE':
			return { ...state, isDropdownMoreOpen: false };
		default:
			return state;
	}
}

function TodoItem({ content }) {
	const [state, dispatch] = useReducer(todoReducer, {
		isDropdownOpen: false,
		isDropdownMoreOpen: false,
	});
	const dropdownRef = useRef(null);
	const dropdownMoreRef = useRef(null);

	const handleClickOutside = useCallback(event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			dispatch({ type: 'CLOSE_DROPDOWN' });
		}
		if (
			dropdownMoreRef.current &&
			!dropdownMoreRef.current.contains(event.target)
		) {
			dispatch({ type: 'CLOSE_DROPDOWNMORE' });
		}
	}, []);

	useEffect(() => {
		if (state.isDropdownOpen || state.isDropdownMoreOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () =>
				document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [state.isDropdownOpen, handleClickOutside, state.isDropdownMoreOpen]);

	return (
		<div className="group relative mb-2 flex h-[4rem] w-full flex-col rounded bg-white p-2 shadow hover:bg-gray-100">
			<div className="flex w-full flex-row justify-between">
				<div className="flex items-center gap-2">
					<Modal triggerTitle={content}>
						<TodoModal />
					</Modal>
					<p className="opacity-0 transition-opacity duration-150 ease-in-out hover:bg-gray-200 group-hover:opacity-100">
						Ed
					</p>
				</div>
				<button
					ref={dropdownMoreRef}
					onClick={() => dispatch({ type: 'TOGGLE_DROPDOWN_MORE' })}
					className="px-2 text-lg text-black opacity-0 transition-opacity duration-150 ease-in-out hover:bg-gray-200 group-hover:bg-gray-50 group-hover:opacity-100 "
				>
					...
				</button>
				{state.isDropdownMoreOpen && (
					<div className="absolute z-10 rounded border-2 border-gray-300 bg-white">
						<div className="flex  py-3">
							<MoreTodoForm />
						</div>
					</div>
				)}
			</div>
			<div className="flex w-full justify-end text-end">
				<button
					onClick={() => dispatch({ type: 'TOGGLE_DROPDOWN' })}
					className="aspect-square w-[20px] rounded-full bg-blue-200"
				></button>
			</div>
			{state.isDropdownOpen && (
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

export default TodoItem;

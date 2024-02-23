/* eslint-disable indent */
import { useEffect, useReducer, useCallback, useRef } from 'react';
import Modal from '../../Common/Modal';
import AssignTodo from './AssignTodo';
import TodoModal from './TodoModal';
import MoreActions from './MoreActions';

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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="#000000"
						>
							<path
								d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591"
								stroke="#000000"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M11 20H17"
								stroke="#000000"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
						</svg>
					</p>
				</div>
				<button
					ref={dropdownMoreRef}
					onClick={() => dispatch({ type: 'TOGGLE_DROPDOWN_MORE' })}
					className="px-2 text-lg text-black opacity-0 transition-opacity duration-150 ease-in-out hover:bg-gray-200 group-hover:bg-gray-50 group-hover:opacity-100 "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<rect
							x="18"
							y="10.5"
							width="3"
							height="3"
							rx="1"
							stroke="#000000"
							stroke-width="1.5"
						/>
						<rect
							x="10.5"
							y="10.5"
							width="3"
							height="3"
							rx="1"
							stroke="#000000"
							stroke-width="1.5"
						/>
						<rect
							x="3"
							y="10.5"
							width="3"
							height="3"
							rx="1"
							stroke="#000000"
							stroke-width="1.5"
						/>
					</svg>
				</button>
				{state.isDropdownMoreOpen && (
					<div className="absolute z-10 rounded border-2 border-gray-300 bg-white">
						<div className="flex  py-3">
							<MoreActions />
						</div>
					</div>
				)}
			</div>
			<div className="flex w-full justify-end text-end">
				<button
					onClick={() => dispatch({ type: 'TOGGLE_DROPDOWN' })}
					className="aspect-square w-[20px] rounded-full bg-blue-200"
				>
					<svg viewBox="0 0 24 24" id="person">
						<path
							d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 8a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"
							data-name="person"
						></path>
					</svg>
				</button>
			</div>
			{state.isDropdownOpen && (
				<div
					ref={dropdownRef}
					className="absolute right-[30px] top-[30px] z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg"
				>
					<div className="py-1">
						<AssignTodo />
					</div>
				</div>
			)}
		</div>
	);
}

export default TodoItem;

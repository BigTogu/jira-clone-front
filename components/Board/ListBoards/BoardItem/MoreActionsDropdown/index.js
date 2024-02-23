import MoreActionsForm from './MoreActions';
import { useState } from 'react';

function MoreActionsDropdown({ board }) {
	const [dropdownOpen, setDropdownOpen] = useState({});

	function toggleDropdown(boardId) {
		setDropdownOpen(prevStates => ({
			...prevStates,
			[boardId]: !prevStates[boardId],
		}));
	}

	return (
		<div className="relative">
			<button
				className="rounded px-2 text-lg hover:bg-blue-100"
				onClick={() => toggleDropdown(board.id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="14"
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
			{dropdownOpen[board.id] && (
				<div className="absolute right-0 z-10 rounded border-2 border-gray-300 bg-white">
					<div className="flex  py-3">
						<MoreActionsForm board={board} />
					</div>
				</div>
			)}
		</div>
	);
}

export default MoreActionsDropdown;

import MoreActionsForm from '../MoreActions';
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
				...
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

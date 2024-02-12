import { useEffect, useRef, useState } from 'react';
import getBoards from '../../services/board/get-boards.js';
import { atom, useAtom } from 'jotai';
import Link from 'next/link.js';
import MoreForm from '../MoreForm';
export const boardsAtom = atom([]);

function ListBoards() {
	const [boards, setBoards] = useAtom(boardsAtom);
	const [dropdownOpenStates, setDropdownOpenStates] = useState({});
	const dropdownRefs = useRef({});

	function toggleDropdown(boardId) {
		setDropdownOpenStates(prevStates => ({
			...prevStates,
			[boardId]: !prevStates[boardId],
		}));
	}

	useEffect(() => {
		function handleClickOutside(event) {
			Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
				if (ref && !ref.contains(event.target)) {
					setDropdownOpenStates(prevStates => ({
						...prevStates,
						[key]: false,
					}));
				}
			});
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		getBoards().then(data => {
			if (data) setBoards(data.boards);
		});
	}, [setBoards]);

	return (
		<table className="table-fixed">
			<thead className="border-b-2 border-black">
				<tr>
					<th className="text-start">Nombre</th>
					<th className="text-start">Clave</th>
					<th className="text-start">Responsable</th>
					<th className="text-start">Más Acciones</th>
				</tr>
			</thead>
			<tbody>
				{boards.map(board => (
					<tr key={board.id} className="border-b-2 border-gray-200">
						<td className="py-2">
							<Link href={`/board/${board.id}`} id={board.id}>
								{board.name}
							</Link>
						</td>
						<td className="py-2">{board.key}</td>
						<td className="py-2">{board.owner ? board.owner.username : '-'}</td>
						<td className=" flex justify-end py-2">
							<button
								className="rounded px-2 hover:bg-blue-100"
								ref={el => (dropdownRefs.current[board.id] = el)}
								onClick={() => toggleDropdown(board.id)}
							>
								...
							</button>

							{dropdownOpenStates[board.id] && (
								<div className="absolute z-10 rounded border-2 border-gray-300 bg-white">
									<div className="flex  py-3">
										<MoreForm />
									</div>
								</div>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ListBoards;

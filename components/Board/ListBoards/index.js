import { useEffect } from 'react';
import getBoards from '../../../services/board/get-boards.js';
import { useAtom } from 'jotai';
import Link from 'next/link.js';
import MoreActionsDropdown from './BoardItem/MoreActionsDropdown';
import { boardsAtom } from '../../../store/index.js';

function ListBoards() {
	const [boards, setBoards] = useAtom(boardsAtom);

	useEffect(() => {
		async function loadBoards() {
			try {
				const data = await getBoards();
				if (data) setBoards(data.boards);
			} catch (error) {
				console.error('Error loading boards:', error);
			}
		}

		loadBoards();
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
							<Link
								href={`/board/${board.id}`}
								className="text-blue-500 hover:text-blue-700"
							>
								{board.name}
							</Link>
						</td>
						<td className="py-2">{board.key}</td>
						<td className="py-2">{board.owner.username}</td>
						<td className=" flex justify-end py-2">
							<MoreActionsDropdown board={board} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ListBoards;

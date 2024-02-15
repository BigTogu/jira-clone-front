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
			<thead className=" border-b-[3px] border-gray-200  ">
				<tr>
					<th className="w-1/4 pb-3 text-start font-normal">Nombre</th>
					<th className="w-1/4 pb-3 text-start font-normal">Clave</th>
					<th className="w-1/4 pb-3 text-start font-normal">Responsable</th>
					<th className="w-fit pb-3 text-end font-normal">Más Acciones</th>
				</tr>
			</thead>
			<tbody>
				{boards.map(board => (
					<tr
						key={board.id}
						className=" border-b-2 border-gray-200 hover:bg-gray-100"
					>
						<td className="flex cursor-pointer items-center gap-1 py-2">
							<span>P</span>
							<Link
								href={`/board/${board.id}`}
								className="text-blue-500 hover:text-blue-500 hover:underline"
							>
								{board.name}
							</Link>
						</td>
						<td className="py-2 text-gray-700">{board.key}</td>
						<td className="py-2 text-gray-700">{board.owner.username}</td>
						<td className=" flex justify-end py-2 text-gray-700">
							<MoreActionsDropdown board={board} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ListBoards;

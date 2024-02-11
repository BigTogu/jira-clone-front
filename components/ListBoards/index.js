import { useEffect } from 'react';
import getBoards from '../../services/board/get-boards.js';
import { atom, useAtom } from 'jotai';
import Link from 'next/link.js';

export const boardsAtom = atom([]);

function ListBoards() {
	const [boards, setBoards] = useAtom(boardsAtom);

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
					<th className="text-start">Tipo</th>
					<th className="text-start">Responsable</th>
					<th className="text-start">Más Acciones</th>
				</tr>
			</thead>
			<tbody>
				{boards.map(board => (
					<tr key={board.id} className="border-b-2 border-gray-200">
						<td className="py-2">
							<Link href={`/board/${board.id}`}>{board.name}</Link>
						</td>
						<td className="py-2">{board.name}</td>
						<td className="py-2">{board.name}</td>
						<td className="py-2">{board.name}</td>
						<td className="py-2">Hola</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ListBoards;

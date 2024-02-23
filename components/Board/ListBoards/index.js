import { useEffect } from 'react';
import getBoards from '../../../services/board/get-boards.js';
import { useSetAtom } from 'jotai';
import Link from 'next/link.js';
import MoreActionsDropdown from './BoardItem/MoreActionsDropdown';
import { boardsAtom } from '../../../store/index.js';
import Favorite from '../../../UI/favorite';
import FooterPagination from '../FooterPagination/index.js';
import { usePagination } from '../../../hooks/hooks.js';

function ListBoards({ filtered, query }) {
	const setBoards = useSetAtom(boardsAtom);

	const { currentPage, totalPages, setTotalPages, changePage } = usePagination(
		0,
		0,
	);

	useEffect(() => {
		async function loadBoards(page, query) {
			try {
				const data = await getBoards(page, query);
				if (data) {
					setBoards(data.boards);
					setTotalPages(data.totalPage);
				}
			} catch (error) {
				console.error('Error loading boards:', error);
			}
		}

		loadBoards(currentPage, query);
	}, [setBoards, currentPage, query, setTotalPages]);

	return (
		<>
			<table className="mb-3 table-fixed">
				<thead className=" border-b-[3px] border-gray-200  ">
					<tr>
						<th className="flex w-1/4 items-center gap-1 pb-3 text-start font-normal">
							<Favorite isHeaader={true} />
							<span>Nombre</span>
						</th>
						<th className="w-1/4 pb-3 text-start font-normal">Clave</th>
						<th className="w-1/4 pb-3 text-start font-normal">Responsable</th>
						<th className="w-fit pb-3 text-end font-normal">Más Acciones</th>
					</tr>
				</thead>
				<tbody>
					{filtered.map(board => (
						<tr
							key={board.id}
							className=" border-b-2 border-gray-200 hover:bg-gray-100"
						>
							<td className="flex cursor-pointer items-center gap-1 py-2">
								<Favorite boardId={board.id} />

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

			<FooterPagination
				currentPage={currentPage}
				totalPages={totalPages}
				changePage={changePage}
			/>
		</>
	);
}

export default ListBoards;

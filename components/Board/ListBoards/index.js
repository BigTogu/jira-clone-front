import { useEffect, useState } from 'react';
import getBoards from '../../../services/board/get-boards.js';
import { useSetAtom } from 'jotai';
import Link from 'next/link.js';
import MoreActionsDropdown from './BoardItem/MoreActionsDropdown';
import { boardsAtom } from '../../../store/index.js';

function ListBoards({ filtered, query }) {
	const setBoards = useSetAtom(boardsAtom);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

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
	}, [setBoards, currentPage, query]);

	function changePage(page) {
		setCurrentPage(page);
	}

	return (
		<>
			<table className="mb-3 table-fixed">
				<thead className=" border-b-[3px] border-gray-200  ">
					<tr>
						<th className="w-1/4 pb-3 text-start font-normal">Nombre</th>
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
			<div className="pagination-controls text-gray-400">
				<button
					className="disabled:cursor-not-allowed disabled:opacity-50"
					onClick={() => changePage(currentPage - 1)}
					disabled={currentPage === 0}
				>
					<svg
						class="h-2.5 w-2.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>{' '}
				</button>
				<span className="mx-3 rounded bg-blue-100 px-3 py-1.5 text-blue-800 ">
					{currentPage + 1}
				</span>
				<button
					className="disabled:cursor-not-allowed disabled:opacity-50"
					onClick={() => changePage(currentPage + 1)}
					disabled={currentPage === totalPages - 1 || totalPages === 0}
				>
					<svg
						class="h-2.5 w-2.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
				</button>
			</div>
		</>
	);
}

export default ListBoards;

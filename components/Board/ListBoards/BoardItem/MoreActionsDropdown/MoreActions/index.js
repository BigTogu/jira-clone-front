import React from 'react';
import deleteBoard from '../../../../../../services/board/delete-board.js';
import { useSetAtom } from 'jotai';
import { boardsAtom } from '../../../../../../store/index.js';

function MoreActionsForm({ board }) {
	const setBoards = useSetAtom(boardsAtom);

	async function handleDelete(board) {
		try {
			const deleted = await deleteBoard(board.id);
			if (deleted) {
				setBoards(prevBoards =>
					prevBoards.filter(prevBoard => prevBoard.id !== board.id),
				);
			} else {
				alert('El tablero no pudo ser eliminado');
			}
		} catch (error) {
			console.error('Error al eliminar el tablero:', error);
			alert(
				'Hubo un problema al eliminar el tablero. Por favor, inténtalo de nuevo.',
			);
		}
	}

	return (
		<div className="z-50 flex flex-col ">
			<button
				className="w-full px-4 py-1.5 text-start hover:bg-gray-200"
				onClick={() => handleDelete(board)}
				aria-label={`Mover el tablero ${board.name} a la papelera`}
			>
				Mover a la papelera
			</button>
			<button
				className="w-full px-4 py-1.5 text-start hover:bg-gray-200"
				aria-label="Configurar proyecto"
			>
				Configuración del proyecto
			</button>
		</div>
	);
}

export default MoreActionsForm;

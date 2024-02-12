import React from 'react';
import deleteBoard from '../../services/board/delete-board';

function MoreForm({ board }) {
	async function onDelete(board) {
		const deleted = await deleteBoard(board.id);
		if (deleted) {
			alert('El tablero fue eliminado');
		} else {
			alert('El tablero no pudo ser eliminado');
		}
	}

	return (
		<div className="z-50 flex shrink-0 flex-col ">
			<button
				className="w-full px-4 py-1.5 text-start hover:bg-gray-200"
				onClick={() => onDelete(board)}
			>
				Mover a la papelera
			</button>
			<button className="w-full px-4 py-1.5 text-start hover:bg-gray-200">
				Configuración del proyecto
			</button>
		</div>
	);
}

export default MoreForm;

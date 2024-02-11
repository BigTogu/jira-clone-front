// createBoardForm.js
import React from 'react';
import createBoard from '../../../services/board/create-board.js';
import BoardForm from '../CreateBoardForm/index.js';

import { useSetAtom } from 'jotai';
import { boardsAtom } from '../../ListBoards/index.js';

function CreateBoardModal({ onSuccess, onError }) {
	const setBoards = useSetAtom(boardsAtom);

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const formData = new FormData(event.target);
			const data = Object.fromEntries(formData.entries());
			const successResponse = await createBoard(data);

			if (successResponse) {
				const dataBoard = { ...data, id: successResponse.boardId };

				setBoards(prevBoards => [...prevBoards, dataBoard]);
				onSuccess();
			} else {
				onError('Error al crear el tablero. Intente nuevamente.');
			}
		} catch (error) {
			console.error('Error al crear el tablero:', error);
			onError('Se produjo un error al crear el tablero.');
		}
	}

	return <BoardForm onSubmit={handleSubmit} />;
}

export default CreateBoardModal;

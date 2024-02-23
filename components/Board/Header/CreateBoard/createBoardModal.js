// createBoardForm.js
import React from 'react';
import createBoard from '../../../../services/board/create-board.js';
import BoardForm from './createBoardForm.js';
// import { useSetAtom } from 'jotai';
// import { boardsAtom } from '../../../../store/index.js';

function CreateBoardModal({ setIsOpen }) {
	// const setBoards = useSetAtom(boardsAtom);

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());

		try {
			const { data: successResponse } = await createBoard(data);
			if (successResponse) {
				// setBoards(prevBoards => [...prevBoards, successResponse]);
				setIsOpen(false);
			}
		} catch (error) {
			console.error('Error al crear el tablero:', error);
		}
	}

	return (
		<div>
			<h2 className="text-lg font-semibold">Crear un nuevo tablero</h2>
			<p className="my-2.5 text-base leading-4">
				Invita a más personas. Haz click en guardar al terminar.
			</p>
			<BoardForm onSubmit={handleSubmit} />
		</div>
	);
}

export default CreateBoardModal;

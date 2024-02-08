// createBoardForm.js
import React from 'react';
import createBoard from '../../../services/create-board.js';
import FormModal from '../form/index.js';

import { useSetAtom } from 'jotai';
import { boardsAtom } from '../../list-boards/index.js';

function CreateBoardForm({ onSuccess, onError }) {
	const setBoards = useSetAtom(boardsAtom);

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const formData = new FormData(event.target);
			const data = Object.fromEntries(formData.entries());
			const successResponse = await createBoard(data);

			if (successResponse) {
				const dataBoard = { ...data, id: successResponse.board_id };

				setBoards(prevBoards => [...prevBoards, dataBoard]);
				onSuccess();
			} else {
				onError('Failed to create board');
			}
		} catch (error) {
			console.error('Error creating board:', error);
			onError('An error occurred while creating the board');
		}
	}

	return <FormModal handleSubmit={handleSubmit} />;
}

export default CreateBoardForm;

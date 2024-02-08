// createBoardForm.js
import React from 'react';
import createBoard from '../../../services/create-board.js';
import FormModal from '../form/index.js';

function CreateBoardForm({ onSuccess, onError }) {
	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const formData = new FormData(event.target);
			const data = Object.fromEntries(formData.entries());
			const success = await createBoard(data);
			if (success) {
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

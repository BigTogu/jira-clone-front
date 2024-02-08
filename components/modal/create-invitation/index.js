// createBoardForm.js
import React from 'react';
import inviteToBoard from '../../../services/invite-to-board.js';
import FormGroup from '../formGroup/index.js';

function CreateInvitationForm({ onSuccess, onError, board }) {
	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const formData = new FormData(event.target);
			const data = Object.fromEntries(formData.entries());
			const success = await inviteToBoard({ board_id: board.id, ...data });
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

	return <FormGroup handleSubmit={handleSubmit} />;
}

export default CreateInvitationForm;

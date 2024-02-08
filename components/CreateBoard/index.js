import Modal from '../Modal/index.js';
import CreateBoardModal from '../Modal/CreateBoardModal/index.js';
import { useState } from 'react';

function CreateBoard() {
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	function handleSuccess() {
		setOpen(false);
		setErrorMessage('');
	}

	function handleError(message) {
		setErrorMessage(message);
	}

	return (
		<Modal
			open={open}
			setOpen={setOpen}
			errorMessage={errorMessage}
			triggerTitle={'Crear Grupo'}
		>
			<div>
				<h2 className="text-lg font-semibold">Create a new board</h2>
				<p className="my-2.5 text-base leading-4">
					Make your board here and invite people. Click save when you are done.
				</p>
				<CreateBoardModal onSuccess={handleSuccess} onError={handleError} />
			</div>
		</Modal>
	);
}

export default CreateBoard;

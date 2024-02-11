import Modal from '../Modal';
import CreateBoardModal from '../Modal/CreateBoardModal';
import { useState } from 'react';

function CreateBoard() {
	const [isOpen, setIsOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	function handleSuccess() {
		setIsOpen(false);
		setErrorMessage('');
	}

	function handleError(message) {
		setErrorMessage(message);
	}

	return (
		<Modal
			open={isOpen}
			setOpen={setIsOpen}
			errorMessage={errorMessage}
			triggerTitle={'Crear Proyecto'}
		>
			<div>
				<h2 className="text-lg font-semibold">Crear un nuevo tablero</h2>
				<p className="my-2.5 text-base leading-4">
					Invita a más personas. Haz click en guardar al terminar.
				</p>
				<CreateBoardModal onSuccess={handleSuccess} onError={handleError} />
			</div>
		</Modal>
	);
}

export default CreateBoard;

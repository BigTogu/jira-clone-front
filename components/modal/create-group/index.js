import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import CreateBoardForm from '../create-board-form/index.js';

function CreateGroupModal() {
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	function handleSuccess() {
		setOpen(false);
	}
	function handleError(message) {
		setErrorMessage(message);
	}
	function handleModalClose() {
		setOpen(false);
		setErrorMessage('');
	}

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button>Crear Grupo</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-100 " />
				<Dialog.Content className="fixed left-1/2 top-1/2 z-10 max-h-[850px] w-2/3 max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-md">
					<Dialog.Title className="text-lg font-semibold">
						Create a new board
					</Dialog.Title>
					<Dialog.Description className="my-2.5 text-base leading-4">
						Make your board here and invite people. Click save when you are
						done.
					</Dialog.Description>
					<CreateBoardForm onSuccess={handleSuccess} onError={handleError} />
					{errorMessage && <div className="text-red-500">{errorMessage}</div>}
					<Dialog.Close asChild>
						<button
							className="absolute right-2  top-2 flex h-6 w-6"
							aria-label="Close"
							onClick={handleModalClose}
						>
							X
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default CreateGroupModal;

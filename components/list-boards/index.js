import { useState, useEffect } from 'react';
import CreateGroupModal from '../modal/create-group/index.js';
import CreateInvitationForm from '../modal/create-invitation/index.js';
import getBoards from '../../services/get-boards.js';
import { atom, useAtom } from 'jotai';

export const boardsAtom = atom([]);

function ListBoards() {
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [boards, setBoards] = useAtom(boardsAtom);

	useEffect(() => {
		getBoards().then(data => {
			if (data) setBoards(data.boards);
		});
	}, [setBoards]);

	function handleSuccess() {
		setOpen(false);
		setErrorMessage('');
	}

	function handleError(message) {
		setErrorMessage(message);
	}

	return (
		<>
			{boards.map(board => (
				<div
					key={board.id}
					className="rounded-md border-2 border-gray-300 p-4 shadow-md"
				>
					<CreateGroupModal
						open={open}
						setOpen={setOpen}
						errorMessage={errorMessage}
						triggerTitle={board.name}
					>
						<div>
							<h2 className="text-lg font-semibold">
								Invitar a un nuevo miembro
							</h2>
							<p className="my-2.5 text-base leading-4">
								Invita a un nuevo miembro a tu grupo.
							</p>
							<CreateInvitationForm
								onSuccess={handleSuccess}
								onError={handleError}
								board={board}
							/>
						</div>
					</CreateGroupModal>
				</div>
			))}
		</>
	);
}

export default ListBoards;

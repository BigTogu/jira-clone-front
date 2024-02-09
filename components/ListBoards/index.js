import { useState, useEffect } from 'react';
import Modal from '../Modal/index.js';
import InvitationForm from '../Modal/InvitationModal/index.js';
import getBoards from '../../services/board/get-boards.js';
import { atom, useAtom } from 'jotai';
import Link from 'next/link.js';

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
					<div className="flex justify-between">
						<Link href={`/board/${board.id}`}>{board.name}</Link>
						<Modal
							open={open}
							setOpen={setOpen}
							errorMessage={errorMessage}
							triggerTitle={'Open'}
						>
							<div>
								<h2 className="text-lg font-semibold">
									Invitar a un nuevo miembro
								</h2>
								<p className="my-2.5 text-base leading-4">
									Invita a un nuevo miembro a tu grupo.
								</p>
								<InvitationForm
									onSuccess={handleSuccess}
									onError={handleError}
									board={board}
								/>
							</div>
						</Modal>
					</div>
				</div>
			))}
		</>
	);
}

export default ListBoards;

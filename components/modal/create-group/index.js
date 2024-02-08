import * as Dialog from '@radix-ui/react-dialog';
import createBoard from '../../../services/createBoard.js';
import inviteToBoard from '../../../services/inviteToBoard.js';
import FormModal from '../form/index.js';
import FormGroup from '../formGroup/index.js';

import { useSetAtom } from 'jotai';
import { boardsAtom } from '../../../pages/home/index.js';
import { useState } from 'react';

function ModalCreateGroup({
	board,
	labelButton,
	dialogTitle,
	dialogDescription,
}) {
	const setBoards = useSetAtom(boardsAtom);
	const [open, setOpen] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());

		createBoard(data).then(resp => {
			return resp.json().then(jsonResp => {
				const dataBoard = { ...data, id: jsonResp.board_id };
				setBoards(prevBoards => [...prevBoards, dataBoard]);
			});
		});

		event.currentTarget.reset();
		setOpen(false);
	}

	function handleSubmitGroup(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());

		inviteToBoard({ board_id: board.id, ...data });

		event.currentTarget.reset();
		setOpen(false);
	}
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="">{labelButton}</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-100 " />
				<Dialog.Content className="fixed left-1/2 top-1/2 z-10 max-h-[850px] w-2/3 max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-md">
					<Dialog.Title className="text-lg font-semibold">
						{dialogTitle}
					</Dialog.Title>
					<Dialog.Description className="my-2.5 text-base leading-4">
						{dialogDescription}
					</Dialog.Description>
					<FormModal handleSubmit={handleSubmit} />

					<Dialog.Close asChild>
						<button
							className="absolute right-2  top-2 flex h-6 w-6"
							aria-label="Close"
						>
							X
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default ModalCreateGroup;

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import createBoard from '../../services/createBoard.js';
import getBoards from '../../services/getBoards.js';

export default function Home() {
	const [open, setOpen] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());

		createBoard(data);

		getBoards().then(boards => {
			console.log(boards, 'hoards');
		});

		event.currentTarget.reset();
		setOpen(false);
	}
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="">Crear board</button>
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
					<form
						onSubmit={handleSubmit}
						className="mb-2.5 flex items-center gap-3"
					>
						<label className="text-right  text-base" htmlFor="name">
							Name
						</label>
						<input
							className="flex h-5 w-full flex-1 items-center rounded-md px-2.5 text-base shadow-md"
							name="name"
							placeholder="Frontend Project"
						/>
						<div className="mt-6 flex justify-end">
							<button
								type="submit"
								className="hover:bg-green-300s  rounded-xl bg-green-400 px-4 py-2 text-white"
							>
								Save changes
							</button>
						</div>
					</form>

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

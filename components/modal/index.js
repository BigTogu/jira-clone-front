import * as Dialog from '@radix-ui/react-dialog';

function CreateGroupModal({
	children,
	open,
	setOpen,
	errorMessage,
	triggerTitle,
}) {
	function handleModalClose() {
		setOpen(false);
	}
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button>{triggerTitle}</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-100 " />
				<Dialog.Content
					aria-modal="true"
					role="dialog"
					className="fixed left-1/2 top-1/2 z-10 max-h-[850px] w-2/3 max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-md"
				>
					{children}
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

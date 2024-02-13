import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';

function CreateGroupModal({ children, triggerTitle, classNameTrigger }) {
	const [isOpen, setIsOpen] = useState(false);

	const childrenWithProps = React.Children.map(children, child =>
		React.cloneElement(child, { setIsOpen }),
	);

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>
				<button className={classNameTrigger}>{triggerTitle}</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
				<Dialog.Content
					aria-modal="true"
					role="dialog"
					className="fixed left-1/2 top-1/2 z-10 max-h-[850px] w-2/3  -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-md"
				>
					{childrenWithProps}
					<Dialog.Close asChild>
						<button
							className="absolute right-2 top-2 flex h-6 w-6"
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

export default CreateGroupModal;

import Modal from '../Modal';
import InvitationForm from '../Modal/InvitationForm';

function ModalButton() {
	return (
		<div className="w-fit rounded bg-blue-500 px-4 py-2 hover:bg-blue-400">
			<Modal
				triggerTitle="Invitar a personas a Mi proyecto"
				classNameTrigger="rounded bg-blue-500 px-4 py-2 hover:bg-blue-400"
			>
				<InvitationForm />
			</Modal>
		</div>
	);
}

export default ModalButton;

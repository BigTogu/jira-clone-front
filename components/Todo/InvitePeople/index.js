import Modal from '../../Common/Modal';
import InviteModal from './InvitationModal';

function CreateBoard() {
	return (
		<Modal
			triggerTitle={'Invitar a personas a Mi proyecto'}
			classNameTrigger={'rounded bg-blue-500 px-4 py-2 hover:bg-blue-400'}
		>
			<InviteModal />
		</Modal>
	);
}

export default CreateBoard;

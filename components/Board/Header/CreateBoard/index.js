import Modal from '../../../Common/Modal';
import CreateBoardModal from './CreateBoardModal';

function CreateBoard() {
	return (
		<Modal
			triggerTitle={'Crear Proyecto'}
			classNameTrigger={'rounded bg-blue-500 px-4 py-2 hover:bg-blue-400'}
		>
			<CreateBoardModal />
		</Modal>
	);
}

export default CreateBoard;

import Modal from '../../../Common/Modal';
import CreateBoardModal from './createBoardModal.js';

function CreateBoard() {
	return (
		<Modal
			triggerTitle={'Crear Proyecto'}
			classNameTrigger={
				'rounded bg-blue-600 px-4 py-1.5 hover:bg-blue-700 text-white font-semibold text-sm'
			}
		>
			<CreateBoardModal />
		</Modal>
	);
}

export default CreateBoard;

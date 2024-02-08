import ListBoards from '../../components/list-boards/index.js';
import ModalForCreateGroup from '../../components/modal-group/index.js';

export default function Home() {
	return (
		<>
			<ListBoards />
			<ModalForCreateGroup />
		</>
	);
}

import ListBoards from '../../components/list-boards/index.js';
import CreateGroupModal from '../../components/modal/create-group/index.js';

export default function Home() {
	return (
		<>
			<ListBoards />
			<CreateGroupModal />
		</>
	);
}

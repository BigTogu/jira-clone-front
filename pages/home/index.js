import { useEffect } from 'react';
import getBoards from '../../services/getBoards.js';
import Modal from '../../components/modal/index.js';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
export const boardsAtom = atom([]);
import ModalCreateGroup from '../../components/modal/create-group/index.js';

function ListBoards() {
	const router = useRouter();
	const currentPath = router.pathname;

	function handleClick(groupId) {
		const currentQuery = { ...router.query, group: groupId };
		router.push(
			{
				pathname: currentPath,
				query: currentQuery,
			},
			undefined,
			{ shallow: true, scroll: false },
		);
	}

	const isModalOpen = router.query.group;

	function handleClose() {
		const newQuery = { ...router.query };
		delete newQuery.group;

		router.replace(
			{
				pathname: currentPath,
				query: newQuery,
			},
			undefined,
			{ shallow: true, scroll: false },
		);
	}

	const [boards, setBoards] = useAtom(boardsAtom);
	useEffect(() => {
		getBoards().then(data => {
			if (data) setBoards(data.boards);
		});
	}, [setBoards]);

	return (
		<>
			{boards.map(board => (
				<div
					key={board.id}
					className="rounded-md border-2 border-gray-300 p-4 shadow-md"
				>
					<Modal
						board={board}
						labelButton={board.name}
						dialogTitle={'Invitar a un nuevo miembro'}
						dialogDescription={'Invita a un nuevo miembro a tu grupo.'}
						isModalOpen={isModalOpen}
						handleClose={handleClose}
						handleClick={handleClick}
					></Modal>
				</div>
			))}
		</>
	);
}

export default function Home() {
	return (
		<>
			<ListBoards />
			<ModalCreateGroup
				labelButton={'Crear Grupo'}
				dialogTitle={'Create a new board'}
				dialogDescription={
					'Make your board here and invite people. Click save when you are done.'
				}
			></ModalCreateGroup>
		</>
	);
}

// const Hijo(){
// 	return (
// 		<div>
// 			<h1>Hijo</h1>
// 			<h2>state: {state}</h2>
// 			<Modal
// 				labelButton={'Crear Grupo'}
// 				dialogTitle={'Create a new board'}
// 				dialogDescription={
// 					'Make your board here and invite people. Click save when you are done.'
// 				}
// 			></Modal>
// 		</div>
// 	)
// }

// function Padre({children}){
// 	const [state, setState] = useState(0);
// 	return (
// 		<div>
// 			<button onClick={() => setState(state + 1)}>Incrementar</button>
// 			{children}
// 		</div>
// 	)
// }

// function Abuelo(){
// 	return (
// 			<Padre>
// 				<Hijo />
// 			</Padre>
// 	)
// }

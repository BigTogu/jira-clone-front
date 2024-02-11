import ListBoards from '../../components/ListBoards/index.js';
import CreateBoard from '../../components/CreateBoard/index.js';

export default function Home() {
	return (
		<section className="mx-7 my-9 flex flex-col">
			<header className="mb-9 flex flex-row items-center justify-between">
				<h1 className="text-xl font-bold">Proyectos</h1>

				<CreateBoard />
			</header>
			<ListBoards />
		</section>
	);
}

import ListBoards from '../../components/ListBoards/index.js';
import CreateBoard from '../../components/CreateBoard/index.js';

export default function Home() {
	return (
		<section className="mx-7 my-9 flex flex-col">
			<header className="mb-9 flex flex-row items-center justify-between">
				<h1 className="text-xl font-bold">Proyectos</h1>
				<div className="rounded-md bg-blue-500 px-2 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700">
					<CreateBoard />
				</div>
			</header>
			<ListBoards />
		</section>
	);
}

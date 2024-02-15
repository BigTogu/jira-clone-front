import ListBoards from '../../components/Board/ListBoards';
import Header from '../../components/Board/Header';

export function SearchBar({ placeholder }) {
	return (
		<div className="mb-7 w-fit rounded border-2 border-gray-300  py-1.5 hover:bg-gray-50">
			<input
				type="text"
				placeholder={placeholder}
				className=" bg-transparent px-2 ring-0 focus:outline-none"
			/>
			<span className="px-2">Q</span>
		</div>
	);
}
export default function Home() {
	return (
		<section className="mx-7 my-9 flex flex-col">
			<Header />

			<SearchBar placeholder="Buscar proyectos" />

			<ListBoards />
		</section>
	);
}

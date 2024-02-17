import ListBoards from '../../components/Board/ListBoards';
import Header from '../../components/Board/Header';
import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { boardsAtom } from '../../store';

export function SearchBar() {
	const [query, setQuery] = useState('');
	const boards = useAtomValue(boardsAtom);

	// //Our search filter function
	function searchFilter(array) {
		return array.filter(el => el.name.toLowerCase().includes(query));
	}
	const filtered = searchFilter(boards);

	function handleChange(e) {
		setQuery(e.target.value);
	}

	return (
		<>
			<form
				className="w-fit"
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<label
					for="default-search"
					className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<input
						type="search"
						id="default-search"
						class=" w-full rounded border border-gray-300 p-2 text-sm text-gray-900  focus:ring-blue-500 "
						placeholder="Search Project"
						required
						value={query}
						onChange={handleChange}
					/>
					<div
						className={`absolute bottom-[0.65rem] end-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 ${query ? 'hidden' : ''}`}
					>
						<svg
							className="h-4 w-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
				</div>
			</form>

			<ListBoards filtered={filtered} query={query} />
		</>
	);
}
export default function Home() {
	return (
		<section className="mx-7 my-9 flex flex-col">
			<Header />

			<SearchBar />
		</section>
	);
}

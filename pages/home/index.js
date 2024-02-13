import ListBoards from '../../components/Board/ListBoards';
import Header from '../../components/Board/Header';

export default function Home() {
	return (
		<section className="mx-7 my-9 flex flex-col">
			<Header />
			<ListBoards />
		</section>
	);
}

import ListBoards from '../../components/ListBoards';
import Header from '../../components/Header/Home';

export default function Home() {
	return (
		<section className="mx-7 my-9 flex flex-col">
			<Header />
			<ListBoards />
		</section>
	);
}

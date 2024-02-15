import CreateBoard from './CreateBoard';

function Header() {
	return (
		<header className="mb-7 flex flex-row items-center justify-between">
			<h1 className="text-3xl font-normal">Proyectos</h1>
			<CreateBoard />
		</header>
	);
}

export default Header;

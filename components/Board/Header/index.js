import CreateBoard from './CreateBoard';

function Header() {
	return (
		<header className="mb-9 flex flex-row items-center justify-between">
			<h1 className="text-xl font-bold">Proyectos</h1>;
			<CreateBoard />
		</header>
	);
}

export default Header;

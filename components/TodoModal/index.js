function TodoModal() {
	return (
		<section className="flex w-full justify-between gap-4">
			<div className="flex w-full flex-col justify-between">
				<div className=" space-y-6">
					<h1>TITULO</h1>
					<div className="flex flex-col">
						<span className="mb-2 text-sm font-medium">Descripción</span>
						<input
							className="rounded px-2 py-1.5 text-base leading-4 ring-0 hover:bg-gray-100 focus:outline-none"
							placeholder="Editar descripción"
						/>
					</div>

					<div className="flex flex-col">
						<span className="mb-2 text-sm font-medium">Comentario</span>
						<input
							className="rounded px-2 py-1.5 text-base ring-0 hover:bg-gray-100 focus:outline-none"
							placeholder="Editar descripción"
						/>
					</div>
				</div>
				<div className="flex w-full justify-end ">
					<button className="rounded px-4 py-2 text-black hover:text-blue-500">
						Cancelar
					</button>
					<button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
						Guardar
					</button>
				</div>
			</div>
			<div>
				<div className="rounded bg-white p-4 shadow">
					<h3 className="text-lg font-semibold">Detalles</h3>
					<div className="divide-y divide-gray-200">
						<div className="flex items-center justify-between py-4">
							<span>Responsable</span>
							<div>
								<button className="ml-2 text-blue-500 hover:text-blue-600">
									Asignarme a mí
								</button>
							</div>
						</div>
						<div className="flex items-center justify-between py-4">
							<span>Etiquetas</span>
							<span className="text-gray-500">Ninguno</span>
						</div>
						<div className="flex items-center justify-between py-4">
							<span>Padre</span>
							<div className="flex items-center">
								<span className="mr-2 rounded bg-purple-200 px-2.5 py-0.5 text-sm font-semibold text-purple-700 dark:bg-purple-200 dark:text-purple-900">
									NOVEDAD
								</span>
								<span className="text-gray-500">Ninguno</span>
							</div>
						</div>
						<div className="flex items-center gap-2 py-4">
							<span>Publicaciones</span>
						</div>
						<div className="flex items-center gap-2 py-4">
							<span>Informador</span>
							<span className="font-semibold">silvia.kenaan@gmail.com</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TodoModal;

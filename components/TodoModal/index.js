import React from 'react';

function InputField({ label, placeholder }) {
	return (
		<div className="flex flex-col">
			<span className="mb-2 text-sm font-medium">{label}</span>
			<input
				className="rounded px-2 py-1.5 text-base leading-4 ring-0 hover:bg-gray-100 focus:outline-none"
				placeholder={placeholder}
			/>
		</div>
	);
}

function DetailItem({ title, content, actionComponent = null }) {
	return (
		<div className="flex items-center justify-between py-4">
			<span>{title}</span>
			<div className="flex items-center">
				{content}
				{actionComponent}
			</div>
		</div>
	);
}

function TodoModal() {
	return (
		<section className="flex w-full justify-between gap-4">
			<div className="flex w-full flex-col justify-between">
				<div className="space-y-6">
					<h1>TITULO</h1>
					<InputField label="Descripción" placeholder="Editar descripción" />
					<InputField label="Comentario" placeholder="Editar comentario" />
				</div>
				<div className="flex w-full justify-end">
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
						<DetailItem
							title="Responsable"
							content={
								<button className="ml-2 text-blue-500 hover:text-blue-600">
									Asignarme a mí
								</button>
							}
						/>
						<DetailItem
							title="Etiquetas"
							content={<span className="text-gray-500">Ninguno</span>}
						/>
						<DetailItem
							title="Padre"
							content={
								<>
									<span className="mr-2 rounded bg-purple-200 px-2.5 py-0.5 text-sm font-semibold text-purple-700">
										NOVEDAD
									</span>
									<span className="text-gray-500">Ninguno</span>
								</>
							}
						/>
						<DetailItem title="Publicaciones" />
						<DetailItem
							title="Informador"
							content={
								<span className="font-semibold">silvia.kenaan@gmail.com</span>
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TodoModal;

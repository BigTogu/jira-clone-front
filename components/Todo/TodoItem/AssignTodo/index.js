import React from 'react';

function EmailInput() {
	return (
		<div>
			<label className="mb-2 text-sm" htmlFor="email">
				Correo electrónico
			</label>
			<input
				id="email"
				type="email"
				name="email"
				className="mb-2  w-full rounded border-2 border-gray-200 px-2.5 text-base"
				required
			/>
		</div>
	);
}

function AssignTodo() {
	return (
		<form className="flex flex-col px-4">
			<EmailInput />
			<button
				type="submit"
				aria-label="Guardar"
				className="rounded bg-blue-400 py-0.5 text-white hover:bg-blue-500"
			>
				Guardar
			</button>
		</form>
	);
}

export default AssignTodo;

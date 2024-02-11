import React from 'react';

function EmailInput() {
	return (
		<div>
			<label className="mb-2 text-base" htmlFor="email">
				Correo electrónico
			</label>
			<input
				id="email"
				type="email"
				name="email"
				className="mb-4 h-10 w-full border-2 border-gray-200 px-2.5 text-base"
				placeholder="ejemplo@correo.com"
				required
			/>
		</div>
	);
}

function RoleSelector() {
	return (
		<div>
			<label htmlFor="role" className="mb-2 text-base">
				Role
			</label>
			<select
				id="role"
				name="role"
				className="mb-4 h-10 w-full border-2 border-gray-300 bg-white px-2.5 text-base text-gray-700"
				required
			>
				<option value="Administrador">Administrador</option>
				<option value="Encargado">No Administrador</option>
			</select>
		</div>
	);
}

function InvitationForm({ setOpen, handleSubmit }) {
	function handleCancel(event) {
		event.preventDefault();
		setOpen(false);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<EmailInput />
			<RoleSelector />
			<div className="flex justify-end gap-4">
				<button
					onClick={handleCancel}
					type="button"
					className="rounded border-2 border-gray-200 px-4 py-2 text-gray-500 hover:border-blue-500 "
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
				>
					Guardar
				</button>
			</div>
		</form>
	);
}

export default InvitationForm;

import React from 'react';

function TodoActionButton({ children, onClick }) {
	return (
		<button
			className="w-full px-4 py-1.5 text-start hover:bg-gray-200"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

function MoreTodoForm() {
	function handleMoveToBottom() {
		alert('Moviendo a la parte inferior...');
	}

	function handleCopyLink() {
		alert('Copiando enlace de la incidencia...');
	}

	function handleCopyKey() {
		alert('Copiando clave de la incidencia...');
	}

	function handleDelete() {
		alert('Eliminando...');
	}

	return (
		<div className="z-50 flex shrink-0 flex-col">
			<TodoActionButton onClick={handleMoveToBottom}>
				Mover a la parte inferior
			</TodoActionButton>
			<TodoActionButton onClick={handleCopyLink}>
				Copiar Enlace de la incidencia
			</TodoActionButton>
			<TodoActionButton onClick={handleCopyKey}>
				Copiar clave de la incidencia
			</TodoActionButton>
			<TodoActionButton onClick={handleDelete}>Eliminar</TodoActionButton>
		</div>
	);
}

export default MoreTodoForm;

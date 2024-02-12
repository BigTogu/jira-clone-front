import React from 'react';

function MoreTodoForm() {
	return (
		<div className="z-50 flex shrink-0 flex-col ">
			<button className="w-full px-4 py-1.5 text-start hover:bg-gray-200">
				Mover a la parte inferior
			</button>
			<button className="w-full px-4 py-1.5 text-start hover:bg-gray-200">
				Copiar Enlace de la incidencia
			</button>
			<button className="w-full px-4 py-1.5 text-start hover:bg-gray-200">
				Copiar clave de la incidencia
			</button>
			<button className="w-full px-4 py-1.5 text-start hover:bg-gray-200">
				Eliminar
			</button>
		</div>
	);
}

export default MoreTodoForm;

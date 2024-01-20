import React from 'react';

function InputField({ label, placeholder, name, type, className }) {
	return (
		<div className={className}>
			<label className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-gray-700 lg:text-xs">
				{label}
			</label>
			<input
				className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50  px-4 py-3 text-[10px] leading-tight text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none lg:text-xs"
				type={type}
				name={name}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputField;

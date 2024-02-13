import React from 'react';

function InputField({
	label,
	placeholder,
	name,
	type,
	className,
	errorMessage,
}) {
	const hasError = !!errorMessage;

	return (
		<div className={className}>
			<label
				htmlFor={name}
				className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-gray-700 lg:text-xs"
			>
				{label}
			</label>
			<input
				id={name}
				className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50  px-4 py-3 text-[10px] leading-tight text-gray-700 focus:border-blue-400 focus:bg-white focus:outline-none lg:text-xs"
				type={type}
				name={name}
				placeholder={placeholder}
				aria-describedby={hasError ? `${name}-error` : undefined}
			/>
			{hasError && (
				<p
					id={`${name}-error`}
					className="mt-2 text-sm text-red-600"
					role="alert"
				>
					{errorMessage}
				</p>
			)}
		</div>
	);
}

export default InputField;

function FormModal({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit} className="mb-2.5 flex items-center gap-3">
			<label className="text-right  text-base" htmlFor="name">
				Name
			</label>
			<input
				className="flex h-5 w-full flex-1 items-center rounded-md px-2.5 text-base shadow-md"
				name="name"
				placeholder="Frontend Project"
			/>
			<div className="mt-6 flex justify-end">
				<button
					type="submit"
					className="hover:bg-green-300s  rounded-xl bg-green-400 px-4 py-2 text-white"
				>
					Save changes
				</button>
			</div>
		</form>
	);
}

export default FormModal;

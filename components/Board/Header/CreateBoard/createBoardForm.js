function BoardForm({ onSubmit }) {
	return (
		<form onSubmit={onSubmit} className="mb-2.5 flex flex-col gap-3">
			<div className="flex items-center gap-3">
				<label htmlFor="boardName" className="text-right text-base">
					Name:
				</label>
				<input
					type="text"
					id="boardName"
					name="name"
					placeholder="Frontend Project"
					required
					aria-required="true"
					className="h-10 flex-1 rounded-md px-2.5 text-base shadow-md"
				/>
			</div>
			<div className="mt-6 flex justify-end">
				<button
					type="submit"
					className="rounded-xl bg-green-400 px-4 py-2 text-white hover:bg-green-300"
					aria-label="Save the new board"
				>
					Save changes
				</button>
			</div>
		</form>
	);
}

export default BoardForm;

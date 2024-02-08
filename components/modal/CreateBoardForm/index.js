function BoardForm({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit} className="mb-2.5 flex items-center gap-3">
			<label htmlFor="boardName" className="text-right  text-base">
				Name
			</label>
			<input
				id="boardName"
				className="flex h-5 w-full flex-1 items-center rounded-md px-2.5 text-base shadow-md"
				name="name"
				placeholder="Frontend Project"
				required
				aria-required="true"
			/>
			<div className="mt-6 flex justify-end">
				<button
					type="submit"
					className="rounded-xl  bg-green-400 px-4 py-2 text-white hover:bg-green-300"
					aria-label="Save the new board"
				>
					Save changes
				</button>
			</div>
		</form>
	);
}

export default BoardForm;

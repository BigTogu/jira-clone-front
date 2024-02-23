import { PreviousPage, NextPage } from '../../../UI/changePage';

function FooterPagination({ currentPage, totalPages, changePage }) {
	return (
		<div className="pagination-controls text-gray-400">
			<button
				className="disabled:cursor-not-allowed disabled:opacity-50"
				onClick={() => changePage(currentPage - 1)}
				disabled={currentPage === 0}
			>
				<PreviousPage />
			</button>
			<span className="mx-3 rounded bg-blue-100 px-3 py-1.5 text-blue-800 ">
				{currentPage + 1}
			</span>
			<button
				className="disabled:cursor-not-allowed disabled:opacity-50"
				onClick={() => changePage(currentPage + 1)}
				disabled={currentPage === totalPages - 1 || totalPages === 0}
			>
				<NextPage />
			</button>
		</div>
	);
}

export default FooterPagination;

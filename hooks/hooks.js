import { useState } from 'react';
import { validateFields } from '../utils/validate';

export function usePagination(initialPage = 0, initialTotalPages = 0) {
	const [currentPage, setCurrentPage] = useState(initialPage);
	const [totalPages, setTotalPages] = useState(initialTotalPages);

	function changePage(newPage) {
		if (newPage >= 0 && newPage < totalPages) {
			setCurrentPage(newPage);
		}
	}

	return { currentPage, totalPages, setTotalPages, changePage };
}

export function useFormSubmission(successCallback) {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		const errorMessage = validateFields(data);
		if (errorMessage) {
			alert(errorMessage);
			setIsLoading(false);
			return;
		}
		try {
			const isSuccess = await successCallback(data);
			if (isSuccess) {
				setIsSubmissionSuccessful(true);
				event.target.reset();
			}
		} catch (error) {
			console.error('Error during form submission', error);
		} finally {
			setIsLoading(false);
		}
	}
	return { isSubmissionSuccessful, handleSubmit, isLoading };
}

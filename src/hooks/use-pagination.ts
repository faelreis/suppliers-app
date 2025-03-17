import { useState } from "react";

export const usePagination = <T,>(items: T[], itemsPerPage: number) => {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(items.length / itemsPerPage);

	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const nextPage = () => goToPage(currentPage + 1);
	const prevPage = () => goToPage(currentPage - 1);

	return {
		currentPage,
		currentItems,
		totalPages,
		goToPage,
		nextPage,
		prevPage,
	};
};

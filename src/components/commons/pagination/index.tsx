import { Button } from "@/components/commons/button";
import * as S from "./styles";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const getPageNumbers = () => {
		const pages = [];

		pages.push(1);

		if (currentPage > 3) {
			pages.push("...");
		}

		for (
			let i = Math.max(2, currentPage - 1);
			i <= Math.min(totalPages - 1, currentPage + 1);
			i++
		) {
			pages.push(i);
		}

		if (currentPage < totalPages - 2) {
			pages.push("...");
		}

		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	};

	return (
		<S.Pagination>
			<Button
				variant="ghost"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				size="icon"
			>
				<ArrowLeft />
			</Button>
			{getPageNumbers().map((page, index) =>
				page === "..." ? (
					<Button key={index} variant="outline" disabled>
						...
					</Button>
				) : (
					<Button
						key={index}
						variant={currentPage === page ? "default" : "outline"}
						onClick={() => onPageChange(page as number)}
					>
						{page}
					</Button>
				)
			)}
			<Button
				variant="ghost"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				size="icon"
			>
				<ArrowRight />
			</Button>
		</S.Pagination>
	);
};

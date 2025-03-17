import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useQuerySearch = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const search = searchParams.get("search") || "";
	const [searchInput, setSearchInput] = useState(search);

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const params = new URLSearchParams(searchParams);
		if (searchInput) {
			params.set("search", searchInput);
		} else {
			params.delete("search");
		}
		router.push(`?${params.toString()}`);
	};

	const handleClearSearch = () => {
		setSearchInput("");
		const params = new URLSearchParams(searchParams);
		params.delete("search");
		router.push(`?${params.toString()}`);
	};

	return {
		handleSearch,
		handleClearSearch,
		search,
		searchInput,
		setSearchInput,
	};
};

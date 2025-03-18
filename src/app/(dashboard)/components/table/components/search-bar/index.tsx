"use client";

import { Button } from "@/components/commons/button";
import { Search, SearchX } from "lucide-react";
import * as S from "./styles";

export const SearchBar = ({
	searchInput,
	setSearchInputAction,
	handleSearchAction,
}: {
	searchInput: string;
	setSearchInputAction: (value: string) => void;
	handleSearchAction: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<S.TableHeaderSearchForm
			id="form-search-list-suppliers"
			onSubmit={handleSearchAction}
		>
			<S.TableHeaderSearchInput
				type="text"
				id="input-search-list-suppliers"
				placeholder="Pesquisar nome fornecedor"
				value={searchInput}
				onChange={(e) => setSearchInputAction(e.target.value)}
			/>
			<Button size="icon" type="submit" id="button-search-list-suppliers">
				<Search size={20} />
			</Button>
		</S.TableHeaderSearchForm>
	);
};

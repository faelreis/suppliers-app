"use client";

import { Suspense, useState } from "react";
import { Container } from "@/components/commons/container";
import { useSuppliers } from "@/hooks/use-suppliers";
import { usePagination } from "@/hooks/use-pagination";
import { generateCsvFilename } from "@/utils";
import { Pagination } from "@/components/commons/pagination";
import { SkeletonTable } from "@/components/skeleton-table";
import { useQuerySearch } from "@/hooks/use-query-search";
import { useExportCsv } from "@/hooks/use-export-csv";
import * as S from "./styles";
import { SupplierTable } from "./components/supplier-table";
import { TableHeader } from "./components/table-header";
import { ErrorState } from "@/components/error";

export const SupplierList = () => {
	const { data: suppliers, isLoading, isError } = useSuppliers();
	const [openAddSupplier, setOpenAddSupplier] = useState(false);

	const {
		handleSearch,
		handleClearSearch,
		search,
		searchInput,
		setSearchInput,
	} = useQuerySearch();

	const { exportToCsv } = useExportCsv(
		suppliers?.map((supplier) => ({
			id: supplier.id,
			name: supplier.name,
			description: supplier.description,
			state: supplier.address.state,
			city: supplier.address.city,
		})) || [],
		generateCsvFilename("base_fornecedores")
	);

	const filteredSuppliers = suppliers
		?.filter((supplier) =>
			supplier.name.toLowerCase().includes(search.toLowerCase())
		)
		?.sort((a, b) => a.name.localeCompare(b.name));

	const { currentPage, currentItems, totalPages, goToPage } = usePagination(
		filteredSuppliers || [],
		10
	);

	return (
		<S.SupplierArea>
			<Container>
				{isError && <ErrorState />}

				<Suspense fallback={<div>Carregando...</div>}>
					<TableHeader
						handleSearchAction={handleSearch}
						setSearchInputAction={setSearchInput}
						searchInput={searchInput}
						exportToCsvAction={exportToCsv}
						openAddSupplier={openAddSupplier}
						setOpenAddSupplierAction={setOpenAddSupplier}
					/>
				</Suspense>

				<Suspense fallback={<SkeletonTable />}>
					<SupplierTable
						suppliers={currentItems}
						isLoading={isLoading}
						isEmpty={filteredSuppliers?.length === 0}
						handleClearSearchAction={handleClearSearch}
					/>
				</Suspense>

				{filteredSuppliers && filteredSuppliers.length > 10 && (
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={goToPage}
					/>
				)}
			</Container>
		</S.SupplierArea>
	);
};

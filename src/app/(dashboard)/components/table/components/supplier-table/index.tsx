"use client";

import * as S from "./styles";
import { SkeletonTable } from "@/components/skeleton-table";
import { Supplier } from "@/@types/supplier";
import { EmptyState } from "@/components/empty";
import { SupplierTableRow } from "../table-row";

export const SupplierTable = ({
	suppliers,
	isLoading,
	isEmpty,
	handleClearSearchAction,
}: {
	suppliers: Supplier[];
	isLoading: boolean;
	isEmpty: boolean;
	handleClearSearchAction: () => void;
}) => {
	return (
		<S.Table>
			<thead>
				<tr>
					<th style={{ width: "25%" }}>Nome</th>
					<th style={{ width: "35%" }}>Descrição</th>
					<th style={{ width: "10%" }}>Estado</th>
					<th style={{ width: "20%" }}></th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{isLoading &&
					Array.from({ length: 5 }).map((_, index) => (
						<SkeletonTable key={index} />
					))}
				{!isEmpty ? (
					suppliers?.map((supplier) => (
						<SupplierTableRow
							key={supplier.id}
							supplier={supplier}
						/>
					))
				) : (
					<EmptyState onClearSearchAction={handleClearSearchAction} />
				)}
			</tbody>
		</S.Table>
	);
};

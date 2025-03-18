"use client";

import { Supplier } from "@/@types/supplier";
import { SupplierActions } from "../actions";
import * as S from "./styles";
import { truncateText } from "@/utils";

export const SupplierTableRow = ({ supplier }: { supplier: Supplier }) => {
	return (
		<tr key={supplier.id} id={`item-${supplier.id}`}>
			<td>
				<S.HeadingCell>Nome</S.HeadingCell>
				{truncateText(supplier.name, 25) || "-"}
			</td>
			<td>
				<S.HeadingCell>Descrição</S.HeadingCell>
				{truncateText(supplier.description, 30) || "-"}
			</td>
			<td>
				<S.HeadingCell>Estado</S.HeadingCell>
				{supplier.address.state}
			</td>
			<td>
				<S.HeadingCell>Cidade</S.HeadingCell>
				{supplier?.address?.city || "-"}
			</td>
			<td>
				<SupplierActions supplier={supplier} />
			</td>
		</tr>
	);
};

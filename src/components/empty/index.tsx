"use client";

import { Button } from "@/components/commons/button";
import { SearchX } from "lucide-react";
import * as S from "./styles";

export const EmptyState = ({
	onClearSearchAction,
}: {
	onClearSearchAction: () => void;
}) => (
	<tr>
		<td colSpan={5}>
			<S.StatusText>Nenhum fornecedor encontrado</S.StatusText>
			<Button variant="outline" onClick={onClearSearchAction}>
				<SearchX size={18} /> Limpar pesquisa
			</Button>
		</td>
	</tr>
);

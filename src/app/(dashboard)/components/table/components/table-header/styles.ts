import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const TableHeader = styled.div`
	width: 100%;
	${flex("row", "center", "space-between", "1.6rem")}
	padding-bottom: 2.4rem;

	@media (max-width: 768px) {
		${flex("column", "flex-start", "space-between", "1.6rem")}
	}
`;

export const TableHeaderFilters = styled.div`
	${flex("row", "center", "flex-start", "1.8rem")}

	@media (max-width: 768px) {
		width: 100%;
		${flex("column", "flex-start", "space-between", "1.6rem")}
	}
`;

export const Row = styled.div`
	${flex("row", "center", "space-between", "1.6rem")}

	@media(max-width: 768px) {
		width: 100%;
	}
`;

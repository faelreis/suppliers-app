import { flex } from "@/styles/mixins";
import { Text16Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const TableHeaderSearchForm = styled.form`
	${flex("row", "center", "flex-start", "0.8rem")}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const TableHeaderSearchInput = styled.input`
	width: 32rem;
	border-radius: 0.5rem;
	border: 1px solid ${variables.colors.gray[2]};
	padding: 0.8rem;
	color: ${variables.colors.black};
	${Text16Regular}

	@media(max-width: 991px) {
		${flex("column", "flex-start", "space-between", "1.6rem")}
		width: 100%;
	}
`;

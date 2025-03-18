import { flex } from "@/styles/mixins";
import { Text16Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const SupplierArea = styled.section`
	padding: 3.2rem 0 6rem 0;
`;

export const SearchWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;

	input {
		flex: 1;
		padding: 0.8rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	button {
		background: #0066cc;
		color: white;
		border: none;
		padding: 0.8rem 1.5rem;
		border-radius: 4px;
		cursor: pointer;
	}
`;

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
		${flex("column", "flex-start", "space-between", "1.6rem")}
	}
`;

export const TableHeaderSearchForm = styled.form`
	${flex("row", "center", "flex-start", "0.8rem")}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const TableHeaderSearchInput = styled.input`
	width: 100%;
	max-width: 30rem;
	border-radius: 0.5rem;
	border: 1px solid ${variables.colors.gray[2]};
	padding: 0.8rem;
	color: ${variables.colors.black};
	${Text16Regular}

	@media(max-width: 768px) {
		${flex("column", "flex-start", "space-between", "1.6rem")}
		max-width: 100%;
	}
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 1rem;

	th,
	td {
		text-align: left;
	}

	td {
		padding: 1.6rem;
	}

	th {
		background-color: ${variables.colors.gray[4]};
		color: ${variables.colors.gray[1]};
		padding: 1.2rem;
	}

	tr:nth-child(even) {
		background-color: ${variables.colors.gray[4]};
	}

	tr:nth-child(odd) {
		background-color: #ffffff;
	}

	@media (max-width: 768px) {
		display: block;
		width: 100%;

		tbody {
			width: 100%;
			display: block;
		}

		thead {
			display: none;
		}

		tr {
			display: block;
			margin-bottom: 1rem;
			border: 1px solid #ddd;
			border-radius: 4px;
			width: 100%;
		}

		td {
			display: block;
			text-align: left;
			padding: 0.8rem;

			&:before {
				content: attr(data-label);
				float: left;
				font-weight: bold;
				color: ${variables.colors.gray[1]};
				margin-right: 0.8rem;
			}
		}

		button {
			width: 100%;
		}
	}
`;

export const Actions = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const EmptyText = styled.span`
	display: block;
	margin-bottom: 1.6rem;
	background-color: ${variables.colors.gray[1]};
	padding: 1rem;
	text-align: center;
`;

export const Row = styled.div`
	${flex("row", "center", "space-between", "1.6rem")}

	@media(max-width: 768px) {
		width: 100%;
	}
`;

import variables from "@/styles/variables";
import styled from "styled-components";

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
			padding: 0.8rem;
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

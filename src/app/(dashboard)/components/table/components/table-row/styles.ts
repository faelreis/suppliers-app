import { Text14Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const HeadingCell = styled.span`
	${Text14Regular}
	color: ${variables.colors.gray[1]};
	display: block;

	@media (min-width: 768px) {
		display: none;
	}
`;

import { Text16Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const StyledAvatar = styled.div`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 99.9rem;
	background-color: ${variables.colors.primary.brand}20;
	transition: opacity 0.2s ease-in-out;
`;

export const StyledAvatarLetter = styled.span`
	${Text16Regular}
	text-align: centers;
	color: ${variables.colors.primary.brand};
`;

import { Text16Regular, Title32Bold } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled, { keyframes } from "styled-components";

export const DashHero = styled.section`
	padding: 8rem 0 6rem 0;
	background: ${variables.colors.gradient["dark-to-light-right"]};
`;

export const DashTitle = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	color: ${variables.colors.white};
	${Title32Bold}
	margin-bottom: 0.6rem;
`;

export const DashDescription = styled.p`
	color: ${variables.colors.gray[2]};
	${Text16Regular}
`;

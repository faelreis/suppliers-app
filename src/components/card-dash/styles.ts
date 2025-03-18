import { center, flex } from "@/styles/mixins";
import { Text16Regular, Text18Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const CardDash = styled.div`
	padding: 1.6rem;
	border-radius: 0.8rem;
	border: 1px solid ${variables.colors.primary.brand}50;
	${flex("row", "center", "flex-start", "1.2rem")}
	width: 100%;
`;

export const CardDashIcon = styled.div`
	${center}
	padding: 0.6rem;
	border-radius: 0.6rem;
	background: ${variables.colors.primary.brand}10;
`;

export const CardContent = styled.div``;

export const CardDashMetric = styled.h2`
	${Text16Regular}
	font-size: 1.4rem;
	color: ${variables.colors.gray[1]};
`;

export const CardDashResult = styled.span`
	${Text16Regular}
	color: ${variables.colors.black};
`;

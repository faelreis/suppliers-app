import { flex } from "@/styles/mixins";
import { Text14Regular, Text16Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const StyledCardInfo = styled.div`
	width: 100%;
	border-bottom: 1px solid ${variables.colors.gray[2]};
	padding: 1.6rem 0;
`;

export const CardInfoHeader = styled.div`
	${flex("row", "center", "space-between", "1.6rem")};
`;

export const CardInfoTitle = styled.h3`
	${Text14Regular};
	color: ${variables.colors.gray[1]};
	margin-bottom: 0.4rem;
`;

export const CardInfoDescription = styled.p`
	${Text16Regular};
	color: ${variables.colors.black};
`;

export const CardInfoFooter = styled.div``;

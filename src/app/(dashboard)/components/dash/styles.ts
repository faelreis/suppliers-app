import { flex } from "@/styles/mixins";
import { Text16Regular, Title32Bold } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const SupplierDash = styled.section`
	padding: 12rem 0 6rem 0;
	background: #f9fbfc;
`;

export const SupplierDashWrap = styled.div`
	${flex("row", "center", "spcae-between", "1.6rem")}

	@media(max-width: 768px) {
		flex-direction: column;
	}
`;

export const SupplierDashHeading = styled.div`
	margin-bottom: 3.2rem;
`;

export const DashTitle = styled.h1`
	color: ${variables.colors.primary.brand};
	${Title32Bold}
	margin-bottom: 0.6rem;
`;

export const DashDescription = styled.p`
	color: ${variables.colors.gray[1]};
	${Text16Regular}
`;

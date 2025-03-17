import { Text14Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import Link from "next/link";
import styled from "styled-components";

export const Footer = styled.footer`
	background-color: #f8fafb;
	padding: 4rem 0;
`;

export const FooterContent = styled(Link)`
	text-align: center;
	${Text14Regular}
	color: ${variables.colors.gray[1]};
	margin: auto 0;
`;

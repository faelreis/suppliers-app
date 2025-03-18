import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const StatusText = styled.span`
	display: block;
	margin-bottom: 1.6rem;
	${flex("row", "center", "flex-start", "1.6rem")}

	&.error {
		color: red;
	}
`;

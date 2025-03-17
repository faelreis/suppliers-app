import { center } from "@/styles/mixins";
import variables from "@/styles/variables";
import styled from "styled-components";

export const StyledIcon = styled.div`
	width: max-content;
	border-radius: 0.6rem;
	${center}
	padding: 0.8rem;
	background-color: ${variables.colors.primary.brand}10;
	border: 1px solid ${variables.colors.primary.light};

	svg {
		path,
		circle {
			stroke: ${variables.colors.primary.brand};
		}
	}
`;

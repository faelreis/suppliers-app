import variables from "@/styles/variables";
import styled from "styled-components";

export const IframeGoogleMaps = styled.iframe`
	border-radius: 0.8rem;
	border: 1px solid ${variables.colors.gray[1]};
	height: 24rem;
	margin: 0 0 3.2rem 0;

	@media (max-width: 768px) {
		height: 32rem;
	}
`;

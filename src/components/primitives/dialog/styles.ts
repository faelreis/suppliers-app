import { styled } from "styled-components";
import * as RadixDialog from "@radix-ui/react-dialog";
import { Text14Regular, Title20Medium } from "@/styles/patterns";
import variables from "@/styles/variables";
import { z } from "@/styles/mixins";

export const StyledOverlay = styled(RadixDialog.Overlay)`
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);
	position: fixed;
	inset: 0;
	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
	z-index: ${z("modals")};

	@keyframes overlayShow {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const StyledContent = styled(RadixDialog.Content)`
	background-color: white;
	border-radius: 8px;
	padding: 24px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 70rem;
	max-height: 85vh;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: ${z("modals")};

	&:focus {
		outline: none;
	}

	@keyframes contentShow {
		from {
			opacity: 0;
			transform: translate(-50%, -48%) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@media (max-width: 768px) {
		padding: 1.2rem;
	}
`;

export const StyledTitle = styled(RadixDialog.Title)`
	color: ${variables.colors.black};
	${Title20Medium}
`;

export const StyledDescription = styled(RadixDialog.Description)`
	margin: 0.5rem 0rem 2rem 0rem;
	color: #8e8e8e;
	${Text14Regular}
`;

export const StyledClose = styled(RadixDialog.Close)`
	width: fit-content !important;
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: none;
	border: none;
	cursor: pointer;
	color: #666;
	transition: color 0.2s;

	&:hover {
		color: #000;
	}
`;

export const StyledTrigger = styled(RadixDialog.Trigger)``;

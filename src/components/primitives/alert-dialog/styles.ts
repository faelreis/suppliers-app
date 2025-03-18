import { z } from "@/styles/mixins";
import { Text16Regular, Title20Medium } from "@/styles/patterns";
import variables from "@/styles/variables";
import { AlertDialog } from "radix-ui";
import styled from "styled-components";

export const StyledOverlay = styled(AlertDialog.Overlay)`
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

export const StyledContent = styled(AlertDialog.Content)`
	background-color: white;
	border-radius: 8px;
	padding: 24px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 50rem;
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
`;

export const StyledTitle = styled(AlertDialog.Title)`
	color: ${variables.colors.black};
	${Title20Medium}
`;

export const StyledDescription = styled(AlertDialog.Description)`
	margin: 0.5rem 0rem 2rem 0rem;
	color: #8e8e8e;
	${Text16Regular}
`;

export const StyledAction = styled(AlertDialog.Action)`
	all: unset;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	border-radius: 4px;
	padding: 0 15px;
	font-size: 1.6rem;
	line-height: 1;
	font-weight: 500;
	height: 35px;
	user-select: none;
	color: red;
	border: 1px solid red;
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;

	&:focus:not(:focus-visible) {
		outline: 0;
	}

	&:focus-visible {
		outline: 2px solid var(--violet-6);
		outline-offset: 1px;
	}

	&:hover {
		opacity: 0.5;
	}
`;

export const StyledCancel = styled(AlertDialog.Cancel)`
	all: unset;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	padding: 0 15px;
	font-size: 1.6rem;
	line-height: 1;
	font-weight: 500;
	height: 35px;
	user-select: none;
	color: gray;
	border: 1px solid ${variables.colors.gray[2]};
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;

	&:focus:not(:focus-visible) {
		outline: 0;
	}

	&:focus-visible {
		outline: 2px solid var(--violet-6);
		outline-offset: 1px;
	}

	&:hover {
		opacity: 0.5;
	}
`;

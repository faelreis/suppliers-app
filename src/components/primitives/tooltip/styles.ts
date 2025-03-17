import styled from "styled-components";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import variables from "@/styles/variables";

export const TooltipContent = styled(TooltipPrimitive.Content)`
	background-color: ${variables.colors.primary.light};
	color: ${variables.colors.white};
	border-radius: 0.375rem;
	padding: 0.375rem 0.75rem;
	font-size: 1.4rem;
	z-index: 50;
	animation-duration: 200ms;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

	&[data-state="delayed-open"] {
		animation-name: slideIn;
	}

	&[data-state="closed"] {
		animation-name: slideOut;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(2px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideOut {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(2px);
		}
	}
`;

export const TooltipArrow = styled(TooltipPrimitive.Arrow)`
	fill: ${variables.colors.primary.light};
`;

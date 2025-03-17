import styled from "styled-components";
import variables from "@/styles/variables";
import { Text18Regular } from "@/styles/patterns";
import { flex } from "@/styles/mixins";

interface StyledButtonProps {
	$variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link"
		| "success";
	$size?: "default" | "sm" | "lg" | "icon";
	$fullWidth?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
	${flex("row", "center", "center", "0.8rem")}
	padding: 0.8rem 1.6rem;
	${Text18Regular}
	border-radius: 0.5rem;
	border: 1px solid transparent;
	background: ${variables.colors.primary.brand};
	color: ${variables.colors.white};
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

	span {
		${Text18Regular}
		color: ${variables.colors.white};
	}

	&:hover {
		background: ${variables.colors.primary.light};
	}

	&:focus {
		box-shadow: 0px 0px 0px 2px ${variables.colors.primary.brand}40;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	${({ $variant }) =>
		$variant === "destructive" &&
		`
    background: #FCDADA;
    color: #88100F;
    &:hover {
      opacity: 0.6;
      background: #FCDADA;
    }
  `}

	${({ $variant }) =>
		$variant === "outline" &&
		`
    border: 1px solid ${variables.colors.primary.brand};
    background: transparent;
    color: ${variables.colors.primary.brand};
    &:hover {
      background: ${variables.colors.primary.brand}20;
      color: ${variables.colors.primary.brand};
    }
  `}

  ${({ $variant }) =>
		$variant === "secondary" &&
		`
    background: ${variables.colors.primary.medium};
    color: ${variables.colors.white};
    &:hover {
      background: ${variables.colors.primary.brand};
    }
  `}

  ${({ $variant }) =>
		$variant === "ghost" &&
		`
    background: transparent;
    color: ${variables.colors.primary.brand};
    &:hover {
      background: ${variables.colors.primary.brand}20;
    }
  `}

  ${({ $variant }) =>
		$variant === "link" &&
		`
    background: transparent;
    color: ${variables.colors.primary.brand};
    text-decoration: underline;
    &:hover {
      background: transparent;
      opacity: 0.6;
    }
  `}

  ${({ $variant }) =>
		$variant === "success" &&
		`
    background:#DCFAE5;
    color:#1B9339;
    &:hover {
      opacity: 0.6;
      background:#DCFAE5;
    }
  `}

  ${({ $size }) =>
		$size === "sm" &&
		`
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
  `}

  ${({ $size }) =>
		$size === "lg" &&
		`
    padding: 1rem 2rem;
    font-size: 1.8rem;
  `}

  ${({ $size }) =>
		$size === "icon" &&
		`
    padding: 0.8rem;
    font-size: 1.6rem;
  `}

  ${({ $size }) =>
		$size === "default" &&
		`
    padding: 0.8rem 1.6rem;
    font-size: 1.6rem;
  `}

  @media(max-width: 768px) {
		width: ${({ $size }) => ($size !== "icon" ? "100%" : "auto")};
	}
`;

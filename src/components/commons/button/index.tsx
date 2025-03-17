import { StyledButton } from "./styles";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type ButtonProps = {
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link"
		| "success";
	size?: "default" | "sm" | "lg" | "icon";
	fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "default", size = "default", fullWidth, ...props }, ref) => (
		<StyledButton
			ref={ref}
			$variant={variant}
			$size={size}
			$fullWidth={fullWidth}
			{...props}
		/>
	)
);

Button.displayName = "Button";

export default Button;

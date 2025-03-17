import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import * as S from "./styles";

export const TooltipProvider = ({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
	return (
		<TooltipPrimitive.Provider
			data-slot="tooltip-provider"
			delayDuration={delayDuration}
			{...props}
		/>
	);
};

export const Tooltip = ({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot="tooltip" {...props} />
		</TooltipProvider>
	);
};

export const TooltipTrigger = ({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
};

export const TooltipContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof TooltipPrimitive.Content>
>(({ sideOffset = 4, children, ...props }, ref) => {
	return (
		<TooltipPrimitive.Portal>
			<S.TooltipContent ref={ref} sideOffset={sideOffset} {...props}>
				{children}
				<S.TooltipArrow />
			</S.TooltipContent>
		</TooltipPrimitive.Portal>
	);
});

TooltipContent.displayName = "TooltipContent";

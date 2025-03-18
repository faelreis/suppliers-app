"use client";

import { forwardRef } from "react";
import {
	AlertDialogPortal,
	AlertDialog as AlertDialogPrimitive,
	AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import * as S from "./styles";

export const AlertDialog = ({
	children,
	open,
	onOpenChange,
}: {
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}) => {
	return (
		<AlertDialogPrimitive open={open} onOpenChange={onOpenChange}>
			{children}
		</AlertDialogPrimitive>
	);
};

AlertDialog.Trigger = forwardRef<
	HTMLButtonElement,
	{ children: React.ReactNode }
>(function Trigger({ children }, ref) {
	return (
		<AlertDialogTrigger asChild ref={ref}>
			{children}
		</AlertDialogTrigger>
	);
});

AlertDialog.Overlay = forwardRef<HTMLDivElement>(function Overlay(props, ref) {
	return <S.StyledOverlay ref={ref} {...props} />;
});

AlertDialog.Content = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
	function Content({ children }, ref) {
		return (
			<AlertDialogPortal>
				<AlertDialog.Overlay />
				<S.StyledContent ref={ref}>{children}</S.StyledContent>
			</AlertDialogPortal>
		);
	}
);

AlertDialog.Title = forwardRef<
	HTMLHeadingElement,
	{ children: React.ReactNode }
>(function Title({ children }, ref) {
	return <S.StyledTitle ref={ref}>{children}</S.StyledTitle>;
});

AlertDialog.Description = forwardRef<
	HTMLParagraphElement,
	{ children: React.ReactNode }
>(function Description({ children }, ref) {
	return <S.StyledDescription ref={ref}>{children}</S.StyledDescription>;
});

AlertDialog.Cancel = forwardRef<
	HTMLButtonElement,
	{
		children: React.ReactNode;
	} & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function Cancel({ children, ...props }, ref) {
	return (
		<S.StyledCancel ref={ref} {...props}>
			{children}
		</S.StyledCancel>
	);
});

AlertDialog.Action = forwardRef<
	HTMLButtonElement,
	{
		children: React.ReactNode;
	} & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function Action({ children, ...props }, ref) {
	return (
		<S.StyledAction ref={ref} {...props}>
			{children}
		</S.StyledAction>
	);
});

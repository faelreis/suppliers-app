"use client";

import { createContext, useState } from "react";
import {
	AlertDialogPortal,
	AlertDialog as AlertDialogPrimitive,
	AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import * as S from "./styles";

interface AlertDialogContextProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const AlertDialogContext = createContext<AlertDialogContextProps | undefined>(
	undefined
);

export const AlertDialog = ({
	children,
	open: controlledOpen,
	onOpenChange,
}: {
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}) => {
	const [internalOpen, setInternalOpen] = useState(false);
	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : internalOpen;

	const setOpen = (newState: boolean) => {
		if (isControlled) {
			onOpenChange?.(newState);
		} else {
			setInternalOpen(newState);
		}
	};

	return (
		<AlertDialogContext.Provider value={{ open, setOpen }}>
			<AlertDialogPrimitive open={open} onOpenChange={setOpen}>
				{children}
			</AlertDialogPrimitive>
		</AlertDialogContext.Provider>
	);
};

AlertDialog.Trigger = function Trigger({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>;
};

AlertDialog.Overlay = function Overlay() {
	return <S.StyledOverlay />;
};

AlertDialog.Content = function Content({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AlertDialogPortal>
			<AlertDialog.Overlay />
			<S.StyledContent>{children}</S.StyledContent>
		</AlertDialogPortal>
	);
};

AlertDialog.Title = function Title({
	children,
}: {
	children: React.ReactNode;
}) {
	return <S.StyledTitle>{children}</S.StyledTitle>;
};

AlertDialog.Description = function Description({
	children,
}: {
	children: React.ReactNode;
}) {
	return <S.StyledDescription>{children}</S.StyledDescription>;
};

AlertDialog.Cancel = function Cancel({
	children,
	...props
}: {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return <S.StyledCancel {...props}>{children}</S.StyledCancel>;
};

AlertDialog.Action = function Action({
	children,
	...props
}: {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return <S.StyledAction {...props}>{children}</S.StyledAction>;
};

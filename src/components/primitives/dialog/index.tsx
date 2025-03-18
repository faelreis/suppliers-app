import * as S from "./styles";
import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Root = RadixDialog.Root;
export const Portal = RadixDialog.Portal;
export const Trigger = S.StyledTrigger;
export const Overlay = S.StyledOverlay;
export const Content = S.StyledContent;
export const Title = S.StyledTitle;
export const Description = S.StyledDescription;

export const Close = ({ children = <X size={20} />, ...props }) => (
	<S.StyledClose {...props}>{children}</S.StyledClose>
);

export const Dialog = {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
	Description,
	Close,
};

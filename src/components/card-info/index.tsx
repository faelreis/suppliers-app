import { HTMLAttributes } from "react";
import * as S from "./styles";

type CardInfoProps = {
	title: string | null;
	description?: string | null;
} & HTMLAttributes<HTMLDivElement>;

export const CardInfo = ({ title, description, ...props }: CardInfoProps) => {
	return (
		<S.StyledCardInfo {...props}>
			<S.CardInfoHeader>
				<S.CardInfoTitle>{title}</S.CardInfoTitle>
			</S.CardInfoHeader>
			{description && (
				<S.CardInfoDescription>{description}</S.CardInfoDescription>
			)}
		</S.StyledCardInfo>
	);
};

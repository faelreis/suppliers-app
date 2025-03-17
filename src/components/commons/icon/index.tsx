import * as S from "./styles";

type IconProps = {
	children: React.ReactNode;
};

export const Icon = ({ children }: IconProps) => {
	return <S.StyledIcon>{children}</S.StyledIcon>;
};

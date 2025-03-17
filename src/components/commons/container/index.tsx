import { StyledContainer } from "./styles";

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <StyledContainer>{children}</StyledContainer>;
};

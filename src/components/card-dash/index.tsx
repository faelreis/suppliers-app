import * as S from "./styles";

type CardDashProps = {
	metric: string;
	result: string;
	icon?: React.ReactNode;
};

export const CardDash = ({ metric, result, icon }: CardDashProps) => {
	return (
		<S.CardDash>
			{icon && <S.CardDashIcon>{icon}</S.CardDashIcon>}
			<S.CardContent>
				<S.CardDashMetric>{metric || "Não informado"}</S.CardDashMetric>
				<S.CardDashResult>{result || "Não informado"}</S.CardDashResult>
			</S.CardContent>
		</S.CardDash>
	);
};

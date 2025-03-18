import { CloudAlert } from "lucide-react";
import * as S from "./styles";

export const ErrorState = () => (
	<S.StatusText className="error">
		<CloudAlert size={18} color="red" /> Erro ao carregar fornecedores
	</S.StatusText>
);

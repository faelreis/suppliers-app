"use client";

import { Container } from "@/components/commons/container";
import * as S from "./styles";

export const SupplierHero = () => {
	return (
		<S.DashHero>
			<Container>
				<S.DashTitle>Dashboard</S.DashTitle>
				<S.DashDescription>
					Todas as informações necessárias sobre os fornecedores
				</S.DashDescription>
			</Container>
		</S.DashHero>
	);
};

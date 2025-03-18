"use client";

import { CardDash } from "@/components/card-dash";
import * as S from "./styles";
import { Map, MapPin, User } from "lucide-react";
import { Container } from "@/components/commons/container";

const SupplierDash = () => {
	return (
		<S.SupplierDash>
			<Container>
				<S.SupplierDashHeading>
					<S.DashTitle>Dashboard</S.DashTitle>
					<S.DashDescription>
						Todas as informações necessárias sobre os fornecedores
					</S.DashDescription>
				</S.SupplierDashHeading>
				<S.SupplierDashWrap>
					<CardDash
						metric="Quantidade de fornecedores"
						result="200"
						icon={<User color="#3FA1FF" size={28} />}
					/>
					<CardDash
						metric="Estado com mais fornecedores"
						result="Minas Gerais"
						icon={<Map color="#3FA1FF" size={28} />}
					/>
					<CardDash
						metric="Cidade com mais fornecedores"
						result="Belo Horizonte"
						icon={<MapPin color="#3FA1FF" size={28} />}
					/>
				</S.SupplierDashWrap>
			</Container>
		</S.SupplierDash>
	);
};

export { SupplierDash };

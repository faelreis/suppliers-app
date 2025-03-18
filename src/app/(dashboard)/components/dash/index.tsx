"use client";

import { CardDash } from "@/components/card-dash";
import * as S from "./styles";
import { Map, MapPin, User } from "lucide-react";
import { Container } from "@/components/commons/container";
import {
	useCitiesAndStatesWithMostSuppliers,
	useSuppliers,
} from "@/hooks/use-suppliers";
import Skeleton from "@/components/primitives/skeleton";

const SupplierDash = () => {
	const { data: suppliers } = useSuppliers();
	const { data: suppliersInfo, isLoading } =
		useCitiesAndStatesWithMostSuppliers();

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
					{isLoading ? (
						<>
							<Skeleton height="80px" />
							<Skeleton height="80px" />
							<Skeleton height="80px" />
						</>
					) : (
						<>
							<CardDash
								metric="Quantidade de fornecedores"
								result={suppliers?.length.toString() || "-"}
								icon={<User color="#3FA1FF" size={28} />}
							/>
							<CardDash
								metric="Estado com mais fornecedores"
								result={
									suppliersInfo?.stateWithMostSuppliers || "-"
								}
								icon={<Map color="#3FA1FF" size={28} />}
							/>
							<CardDash
								metric="Cidade com mais fornecedores"
								result={
									suppliersInfo?.cityWithMostSuppliers || "-"
								}
								icon={<MapPin color="#3FA1FF" size={28} />}
							/>
						</>
					)}
				</S.SupplierDashWrap>
			</Container>
		</S.SupplierDash>
	);
};

export { SupplierDash };

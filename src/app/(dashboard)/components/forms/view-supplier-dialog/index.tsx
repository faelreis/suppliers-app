"use client";

import { useSupplierStore } from "@/stores/use-supplier-store";

import * as S from "./styles";
import { Button } from "@/components/commons/button";
import { CardInfo } from "@/components/card-info";
import { House, Phone, User } from "lucide-react";
import { Icon } from "@/components/commons/icon";
import { formatZipCode, getFirstName, sanitizePhoneNumber } from "@/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { GoogleMaps } from "@/components/google-maps";

const ViewSupplierDialog = () => {
	const { selectedSupplier } = useSupplierStore();

	return (
		<S.Area>
			<S.Heading>
				<Icon>
					<User size={18} />
				</Icon>
				<S.HeadingText>Dados gerais</S.HeadingText>
			</S.Heading>

			<CardInfo title="ID" description={selectedSupplier?.id || "-"} />

			<CardInfo title="Nome" description={selectedSupplier?.name} />
			{selectedSupplier?.description && (
				<CardInfo
					title="Descrição"
					description={selectedSupplier?.description}
				/>
			)}

			<S.Spacing />

			<S.Heading>
				<Icon>
					<Phone size={18} />
				</Icon>
				<S.HeadingText>Contatos</S.HeadingText>
			</S.Heading>

			{selectedSupplier?.contacts.map((contact, index) => (
				<S.Row key={index}>
					<CardInfo title="Nome" description={contact?.name || "-"} />
					<CardInfo
						title="Número"
						description={contact?.phone || "-"}
					/>
					<S.WhatsAppLink
						href={`https://wa.me/55${sanitizePhoneNumber(
							contact?.phone
						)}?text=Ol%C3%A1%20${encodeURIComponent(
							getFirstName(contact?.name) || "fornecedor"
						)}%2C%20tudo%20bem%3F`}
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M17.4578 14.3637C17.2229 14.2463 15.696 13.5416 15.4611 13.4241C15.2262 13.3067 14.9913 13.3067 14.7564 13.5416C14.5215 13.7765 14.0516 14.4812 13.8167 14.7161C13.6993 14.951 13.4644 14.951 13.2295 14.8335C12.4073 14.4812 11.5851 14.0114 10.8804 13.4241C10.2931 12.8368 9.70587 12.1321 9.23607 11.4274C9.11857 11.1925 9.23607 10.9576 9.35347 10.8401C9.47097 10.7227 9.58837 10.4878 9.82327 10.3703C9.94077 10.2529 10.0582 10.018 10.0582 9.90052C10.1757 9.78312 10.1757 9.54822 10.0582 9.43072C9.94077 9.31332 9.35347 7.90382 9.11857 7.31652C9.00117 6.49442 8.76617 6.49442 8.53127 6.49442H7.94407C7.70917 6.49442 7.35677 6.72932 7.23927 6.84672C6.53457 7.55152 6.18227 8.37362 6.18227 9.31332C6.29967 10.3703 6.65207 11.4274 7.35677 12.367C8.64877 14.2463 10.2931 15.7732 12.2898 16.7128C12.8771 16.9477 13.3469 17.1826 13.9342 17.3001C14.5214 17.535 15.1087 17.535 15.8134 17.4175C16.6356 17.3001 17.3403 16.7128 17.8101 16.0081C18.045 15.5383 18.045 15.0685 17.9276 14.5986L17.4578 14.3637ZM20.3941 3.67552C15.8134 -0.905185 8.41387 -0.905185 3.83317 3.67552C0.0746703 7.43402 -0.63003 13.1892 1.95397 17.7699L0.30957 23.76L6.53457 22.1157C8.29637 23.0553 10.1757 23.5251 12.0549 23.5251C18.5149 23.5251 23.6828 18.3572 23.6828 11.8972C23.8003 8.84342 22.5083 5.90712 20.3941 3.67552ZM17.2229 20.119C15.696 21.0586 13.9342 21.6458 12.0549 21.6458C10.2931 21.6458 8.64877 21.176 7.12187 20.3539L6.76947 20.1189L3.12847 21.0586L4.06807 17.535L3.83317 17.1826C1.01427 12.4845 2.42377 6.61182 7.00447 3.67552C11.5851 0.739215 17.4578 2.26612 20.2767 6.72932C23.0955 11.3099 21.8036 17.3002 17.2229 20.119Z"
								fill="#41E85F"
							/>
						</svg>
					</S.WhatsAppLink>
				</S.Row>
			))}

			<S.Spacing />

			<S.Heading>
				<Icon>
					<House size={18} />
				</Icon>
				<S.HeadingText>Endereço</S.HeadingText>
			</S.Heading>

			<S.Grid>
				<CardInfo
					title="CEP"
					description={
						formatZipCode(
							selectedSupplier?.address.zipCode ?? ""
						) || "-"
					}
				/>
				<CardInfo
					title="Estado"
					description={selectedSupplier?.address.state || "-"}
				/>
				<CardInfo
					title="Cidade"
					description={selectedSupplier?.address.city || "-"}
				/>

				<CardInfo
					title="Logradouro"
					description={selectedSupplier?.address.street || "-"}
				/>

				<CardInfo
					title="Número"
					description={selectedSupplier?.address.number || "-"}
				/>

				<CardInfo
					title="Referência"
					description={selectedSupplier?.address.reference || "-"}
				/>
			</S.Grid>

			<S.Spacing />

			<GoogleMaps
				city={selectedSupplier?.address.city || ""}
				number={selectedSupplier?.address.number || ""}
				state={selectedSupplier?.address.state || ""}
				street={selectedSupplier?.address.street || ""}
				zipCode={selectedSupplier?.address.zipCode || ""}
			/>

			<DialogClose asChild>
				<Button type="submit" fullWidth variant="outline">
					Fechar
				</Button>
			</DialogClose>
		</S.Area>
	);
};

export { ViewSupplierDialog };

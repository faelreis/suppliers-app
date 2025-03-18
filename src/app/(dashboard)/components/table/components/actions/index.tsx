"use client";

import { Button } from "@/components/commons/button";
import { Edit, Eye, Trash } from "lucide-react";
import { Dialog } from "@/components/primitives/dialog/index";
import { AlertDialog } from "@/components/primitives/alert-dialog";
import { useSupplierStore } from "@/stores/use-supplier-store";
import * as S from "./styles";
import { Supplier } from "@/@types/supplier";
import { ViewSupplierDialog } from "../../../forms/view-supplier-dialog";
import { EditSupplierDialog } from "../../../forms/edit-supplier-dialog";
import { DeleteSupplierDialog } from "../../../forms/delete-supplier-dialog";

export const SupplierActions = ({ supplier }: { supplier: Supplier }) => {
	const { setSelectedSupplier } = useSupplierStore();

	return (
		<S.Actions>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button
						variant="outline"
						size="icon"
						onClick={() => setSelectedSupplier(supplier)}
					>
						<Eye size={18} />
					</Button>
				</Dialog.Trigger>
				<Dialog.Overlay />
				<Dialog.Content>
					<Dialog.Close />
					<Dialog.Title>Visualizar fornecedor</Dialog.Title>
					<Dialog.Description>
						Visualize os dados do fornecedor
					</Dialog.Description>
					<ViewSupplierDialog />
				</Dialog.Content>
			</Dialog.Root>

			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button
						variant="success"
						size="icon"
						onClick={() => setSelectedSupplier(supplier)}
					>
						<Edit size={18} />
					</Button>
				</Dialog.Trigger>
				<Dialog.Overlay />
				<Dialog.Content>
					<Dialog.Close />
					<Dialog.Title>Editar Fornecedor</Dialog.Title>
					<Dialog.Description>
						Preencha os campos abaixo para atualizar os dados.
					</Dialog.Description>
					<EditSupplierDialog />
				</Dialog.Content>
			</Dialog.Root>

			<AlertDialog>
				<AlertDialog.Trigger>
					<Button size="icon" variant="destructive">
						<Trash size={18} />
					</Button>
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Title>Excluir Fornecedor</AlertDialog.Title>
					<AlertDialog.Description>
						Você tem certeza que deseja excluir este fornecedor?
					</AlertDialog.Description>
					<DeleteSupplierDialog />
				</AlertDialog.Content>
			</AlertDialog>
		</S.Actions>
	);
};

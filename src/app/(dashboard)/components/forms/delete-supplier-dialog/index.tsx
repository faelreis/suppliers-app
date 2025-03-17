"use client";

import { useDeleteSupplier } from "@/hooks/use-suppliers";
import { useSupplierStore } from "@/stores/use-supplier-store";

import { AlertDialog } from "@/components/primitives/alert-dialog";
import { toast } from "sonner";

const DeleteSupplierDialog = () => {
	const { selectedSupplier } = useSupplierStore();

	const deleteMutation = useDeleteSupplier();

	const handleDelete = () => {
		if (!selectedSupplier?.id) return;
		deleteMutation.mutate(selectedSupplier.id, {
			onSuccess: () => {
				toast.success("Fornecedor removido com sucesso!");
			},
		});
	};

	return (
		<div
			style={{
				display: "flex",
				gap: "16px",
				justifyContent: "flex-start",
			}}
		>
			<AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
			<AlertDialog.Action onClick={handleDelete}>
				Deletar
			</AlertDialog.Action>
		</div>
	);
};

export { DeleteSupplierDialog };

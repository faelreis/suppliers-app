"use client";

import { useDeleteSupplier } from "@/hooks/use-suppliers";
import { useSupplierStore } from "@/stores/use-supplier-store";

import { AlertDialog } from "@/components/primitives/alert-dialog";
import { toast } from "sonner";
import { Trash } from "lucide-react";

const DeleteSupplierDialog = () => {
	const { selectedSupplier } = useSupplierStore();

	const deleteMutation = useDeleteSupplier();

	const handleDelete = () => {
		if (!selectedSupplier?.id) {
			toast.error("Nenhum fornecedor selecionado.");
			return;
		}

		deleteMutation.mutate(selectedSupplier.id);
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
				<Trash size={16} />
				Deletar
			</AlertDialog.Action>
		</div>
	);
};

export { DeleteSupplierDialog };

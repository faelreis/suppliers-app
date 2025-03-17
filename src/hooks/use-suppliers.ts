import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SupplierService } from "@/api/supplier-service";
import { SupplierFormData } from "@/@types/supplier";

export const useSuppliers = () => {
	return useQuery({
		queryKey: ["suppliers"],
		queryFn: () => SupplierService.getAll().then((res) => res.data),
	});
};

export const useSupplier = (id: string) => {
	return useQuery({
		queryKey: ["supplier", id],
		queryFn: () => SupplierService.getById(id).then((res) => res.data),
		enabled: !!id,
	});
};

export const useCreateSupplier = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (supplier: SupplierFormData) =>
			SupplierService.create(supplier),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["suppliers"] });
		},
	});
};

export const useUpdateSupplier = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({
			id,
			supplier,
		}: {
			id: string;
			supplier: SupplierFormData;
		}) => SupplierService.update(id, supplier),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["suppliers"] });
		},
	});
};

export const useDeleteSupplier = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id: string) => SupplierService.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["suppliers"] });
		},
	});
};

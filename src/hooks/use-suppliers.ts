import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SupplierService } from "@/api/supplier-service";
import { SupplierFormData } from "@/@types/supplier";
import { ufToStateName } from "@/utils/index";

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

export const useCitiesAndStatesWithMostSuppliers = () => {
	return useQuery({
		queryKey: ["citiesAndStatesWithMostSuppliers"],
		queryFn: async () => {
			const suppliers = await SupplierService.getAll().then(
				(res) => res.data
			);

			const cityCounts = suppliers.reduce((acc, supplier) => {
				const city = supplier.address.city;
				acc[city] = (acc[city] || 0) + 1;
				return acc;
			}, {} as Record<string, number>);

			const cityWithMostSuppliers = Object.keys(cityCounts).reduce(
				(a, b) => (cityCounts[a] > cityCounts[b] ? a : b)
			);

			const stateCounts = suppliers.reduce((acc, supplier) => {
				const state = supplier.address.state;
				const stateName = ufToStateName[state] || state;
				acc[stateName] = (acc[stateName] || 0) + 1;
				return acc;
			}, {} as Record<string, number>);

			const stateWithMostSuppliers = Object.keys(stateCounts).reduce(
				(a, b) => (stateCounts[a] > stateCounts[b] ? a : b)
			);

			return {
				cityWithMostSuppliers,
				stateWithMostSuppliers,
			};
		},
	});
};

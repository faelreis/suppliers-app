import apiClient from "@/services/axios";
import { Supplier, SupplierFormData } from "@/@types/supplier";

export const SupplierService = {
	getAll: () => apiClient.get<Supplier[]>("/suppliers"),
	getById: (id: string) => apiClient.get<Supplier>(`/suppliers/${id}`),
	create: (supplier: SupplierFormData) =>
		apiClient.post<Supplier>("/suppliers", supplier),
	update: (id: string, supplier: SupplierFormData) =>
		apiClient.put<Supplier>(`/suppliers/${id}`, supplier),
	delete: (id: string) => apiClient.delete(`/suppliers/${id}`),
	searchByName: (name: string) =>
		apiClient.get<Supplier[]>(`/suppliers?nome_like=${name}`),
};

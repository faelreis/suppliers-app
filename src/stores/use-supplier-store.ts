import { create } from "zustand";
import { Supplier } from "@/@types/supplier";

type SupplierStore = {
	selectedSupplier: Supplier | null;
	setSelectedSupplier: (supplier: Supplier | null) => void;
};

export const useSupplierStore = create<SupplierStore>((set) => ({
	selectedSupplier: null,
	setSelectedSupplier: (supplier) => set({ selectedSupplier: supplier }),
}));

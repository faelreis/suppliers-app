export interface Contact {
	name: string;
	phone: string;
}

export interface Address {
	zipCode: string;
	state: string;
	city: string;
	street: string;
	number: string;
	reference?: string;
}

export interface Supplier {
	id: string;
	name: string;
	description?: string;
	contacts: Contact[];
	address: Address;
}

export type SupplierFormData = Omit<Supplier, "id"> & {
	id?: string;
};

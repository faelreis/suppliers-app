import { z } from "zod";

const errorMessages = {
	required: "Campo obrigatório",
	invalidType: "Tipo de dado inválido",
	minLength: (min: number) => `Deve ter pelo menos ${min} caracteres`,
	maxLength: (max: number) => `Deve ter no máximo ${max} caracteres`,
	invalidFormat: "Formato inválido",
};

export const ContactSchema = z.object({
	name: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(1, errorMessages.required),
	phone: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(1, errorMessages.required),
});

export const AddressSchema = z.object({
	zipCode: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(8, "CEP inválido"),
	state: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.regex(/^[A-Z]{2}$/, "Unidade federativa inválida"),
	city: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(1, errorMessages.required),
	street: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(1, errorMessages.required),
	number: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(1, errorMessages.required),
	reference: z.string().max(25, errorMessages.maxLength(25)).optional(),
});

export const SupplierSchema = z.object({
	id: z.string().optional(),
	name: z
		.string({
			required_error: errorMessages.required,
			invalid_type_error: errorMessages.invalidType,
		})
		.min(1, errorMessages.required),
	description: z.string().optional(),
	contacts: z.array(ContactSchema),
	address: AddressSchema,
});

export const SupplierFormDataSchema = SupplierSchema.omit({ id: true }).extend({
	id: z.string().optional(),
});

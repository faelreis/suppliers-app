import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toast } from "sonner";
import { SupplierFormData } from "@/@types/supplier";
import { useCep } from "@/hooks/use-cep";
import { SupplierFormDataSchema } from "@/schemas/supplier";
import { sanitizedZipCode } from "@/utils";

export const useSupplierForm = (defaultValues?: SupplierFormData) => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		watch,
		setValue,
		trigger,
		formState: { errors, isValid },
	} = useForm<SupplierFormData>({
		resolver: zodResolver(SupplierFormDataSchema),
		mode: "onChange",
		defaultValues: defaultValues || {
			contacts: [{ name: "", phone: "" }],
		},
	});

	const {
		fields: contacts,
		append,
		remove,
	} = useFieldArray({
		control,
		name: "contacts",
	});

	const zipCode = watch("address.zipCode");

	const cleanedZipCode =
		typeof zipCode === "string" ? sanitizedZipCode(zipCode) : "";

	const { data: dataCep, isError: isErrorCep } = useCep(
		cleanedZipCode.length === 8 ? cleanedZipCode : ""
	);

	useEffect(() => {
		if (dataCep && !isErrorCep) {
			setValue("address.city", dataCep.localidade, {
				shouldValidate: true,
				shouldDirty: true,
			});
			setValue("address.state", dataCep.uf, {
				shouldValidate: true,
				shouldDirty: true,
			});
			if (dataCep.logradouro !== "") {
				setValue("address.street", dataCep.logradouro, {
					shouldValidate: true,
					shouldDirty: true,
				});
			}
			trigger(["address.city", "address.state", "address.street"]);
		}
	}, [dataCep, isErrorCep, setValue, trigger]);

	const handleRemoveContact = (index: number) => {
		if (contacts.length > 1) {
			remove(index);
		} else {
			toast.error("É necessário ter pelo menos um contato.");
		}
	};

	return {
		register,
		handleSubmit,
		control,
		reset,
		watch,
		setValue,
		errors,
		isValid,
		contacts,
		append,
		remove: handleRemoveContact,
		zipCode,
		dataCep,
		isErrorCep,
	};
};

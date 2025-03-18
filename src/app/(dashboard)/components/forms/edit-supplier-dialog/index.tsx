"use client";

import { useUpdateSupplier } from "@/hooks/use-suppliers";
import { useSupplierStore } from "@/stores/use-supplier-store";
import { SupplierFormData } from "@/@types/supplier";
import { toast } from "sonner";
import { Plus, Trash } from "lucide-react";
import * as S from "./styles";
import { Button } from "@/components/commons/button";
import { useSupplierForm } from "@/hooks/use-supplier-form";
import { Controller } from "react-hook-form";
import { InputMask } from "@react-input/mask";
import { DialogClose } from "@radix-ui/react-dialog";

const EditSupplierDialog = () => {
	const { selectedSupplier } = useSupplierStore();

	const {
		register,
		handleSubmit,
		reset,
		errors,
		isValid,
		contacts,
		append,
		control,
		remove: handleRemoveContact,
	} = useSupplierForm(selectedSupplier || undefined);

	const updateMutation = useUpdateSupplier();

	const onSubmit = (data: SupplierFormData) => {
		if (selectedSupplier) {
			updateMutation.mutate(
				{ id: selectedSupplier.id, supplier: data },
				{
					onSuccess: (response) => {
						const updatedData = response.data;
						reset(updatedData);
						toast.success("Fornecedor atualizado com sucesso!");
					},
					onError: () => {
						toast.error(
							"Erro ao atualizar fornecedor. Tente novamente."
						);
					},
				}
			);
		}
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Fieldset>
				<S.Label>ID: </S.Label>
				<S.Text>{selectedSupplier?.id || "-"}</S.Text>
			</S.Fieldset>

			<S.Fieldset>
				<S.Label>Nome</S.Label>
				<S.Input
					{...register("name")}
					placeholder="Nome do Fornecedor"
				/>
				{errors?.name && (
					<S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
				)}
			</S.Fieldset>

			<S.Fieldset>
				<S.Label>Descrição</S.Label>
				<S.Textarea
					{...register("description")}
					placeholder="Descrição"
				/>
				{errors?.description && (
					<S.ErrorMessage>
						{errors.description.message}
					</S.ErrorMessage>
				)}
			</S.Fieldset>

			{contacts.map((contact, index) => (
				<S.Fieldset key={contact.id}>
					<S.Label>Contato {index + 1}</S.Label>
					<S.FieldsetWrap className="withicon">
						<S.Input
							{...register(`contacts.${index}.name`)}
							placeholder="Nome do Contato"
							defaultValue={contact.name}
						/>
						<Controller
							name={`contacts.${index}.phone`}
							control={control}
							render={({ field }) => (
								<InputMask
									{...field}
									value={field.value ?? ""}
									mask="(__) _____-____"
									replacement={{ _: /\d/ }}
									placeholder="(__) _____-____"
								/>
							)}
						/>
						<Button
							type="button"
							onClick={() => handleRemoveContact(index)}
							variant="destructive"
							size="icon"
						>
							<Trash />
						</Button>
						<Button
							type="button"
							onClick={() => append({ name: "", phone: "" })}
							variant="success"
							size="icon"
						>
							<Plus />
						</Button>
					</S.FieldsetWrap>
					{errors.contacts?.[index]?.name && (
						<S.ErrorMessage>
							{errors.contacts[index]?.name?.message}
						</S.ErrorMessage>
					)}
					{errors.contacts?.[index]?.phone && (
						<S.ErrorMessage>
							{errors.contacts[index]?.phone?.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>
			))}

			<S.DividerLine />

			<S.FormSubtitle>Endereço</S.FormSubtitle>

			<S.FieldsetWrap>
				<S.Fieldset>
					<S.Label>CEP</S.Label>
					<Controller
						name="address.zipCode"
						control={control}
						render={({ field }) => (
							<InputMask
								{...field}
								value={field.value ?? ""}
								mask="_____-___"
								replacement={{ _: /\d/ }}
								placeholder="_____-___"
								inputMode="numeric"
							/>
						)}
					/>

					{errors?.address?.zipCode && (
						<S.ErrorMessage>
							{errors.address.zipCode.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>

				<S.Fieldset>
					<S.Label>Estado</S.Label>
					<S.Input
						{...register("address.state")}
						placeholder="Estado"
						maxLength={2}
					/>
					{errors?.address?.state && (
						<S.ErrorMessage>
							{errors.address.state.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>
			</S.FieldsetWrap>

			<S.FieldsetWrap>
				<S.Fieldset className="">
					<S.Label>Cidade</S.Label>
					<S.Input
						{...register("address.city")}
						placeholder="Cidade"
					/>
					{errors?.address?.city && (
						<S.ErrorMessage>
							{errors.address.city.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>

				<S.Fieldset>
					<S.Label>Logradouro</S.Label>
					<S.Input
						{...register("address.street")}
						placeholder="Logradouro"
					/>
					{errors?.address?.street && (
						<S.ErrorMessage>
							{errors.address.street.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>
			</S.FieldsetWrap>

			<S.FieldsetWrap>
				<S.Fieldset>
					<S.Label>Número</S.Label>
					<S.Input
						{...register("address.number")}
						placeholder="Número"
					/>
					{errors?.address?.number && (
						<S.ErrorMessage>
							{errors.address.number.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>

				<S.Fieldset>
					<S.Label>Referência</S.Label>
					<S.Input
						{...register("address.reference")}
						placeholder="Referência"
						maxLength={25}
					/>
					{errors?.address?.reference && (
						<S.ErrorMessage>
							{errors.address.reference.message}
						</S.ErrorMessage>
					)}
				</S.Fieldset>
			</S.FieldsetWrap>

			<S.ButtonsWrap>
				<DialogClose asChild>
					<Button variant="outline" type="button" fullWidth>
						Cancelar
					</Button>
				</DialogClose>
				<Button
					type="submit"
					fullWidth
					disabled={updateMutation.isPending || !isValid}
				>
					{updateMutation.isPending ? "Atualizando..." : "Atualizar"}
				</Button>
			</S.ButtonsWrap>
		</S.Form>
	);
};

export { EditSupplierDialog };

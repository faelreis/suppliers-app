"use client";

import { Container } from "@/components/commons/container";
import { useSuppliers } from "@/hooks/use-suppliers";
import { useSupplierStore } from "@/stores/use-supplier-store";
import {
	CloudAlert,
	Download,
	Edit,
	Eye,
	Filter,
	Search,
	SearchX,
	Trash,
	User,
} from "lucide-react";
import { Dialog } from "@/components/primitives/dialog/index";
import { AddSupplierDialog } from "../forms/add-supplier-dialog";
import { EditSupplierDialog } from "../forms/edit-supplier-dialog";

import * as S from "./styles";
import { AlertDialog } from "@/components/primitives/alert-dialog";
import { useState } from "react";
import { DeleteSupplierDialog } from "../forms/delete-supplier-dialog";
import { Button } from "@/components/commons/button";
import { generateCsvFilename, truncateText } from "@/utils";
import { ViewSupplierDialog } from "../forms/view-supplier-dialog";
import { useQuerySearch } from "@/hooks/use-query-search";
import { useExportCsv } from "@/hooks/use-export-csv";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/primitives/tooltip";
import { Pagination } from "@/components/commons/pagination";
import { usePagination } from "@/hooks/use-pagination";
import { SkeletonTable } from "@/components/skeleton-table";

const SupplierList = () => {
	const {
		handleSearch,
		handleClearSearch,
		search,
		searchInput,
		setSearchInput,
	} = useQuerySearch();

	const { data: suppliers, isLoading, isError } = useSuppliers();
	const { setSelectedSupplier } = useSupplierStore();
	const [openAddSupplier, setOpenAddSupplier] = useState(false);

	const { exportToCsv } = useExportCsv(
		suppliers?.map((supplier) => ({
			id: supplier.id,
			name: supplier.name,
			description: supplier.description,
			state: supplier.address.state,
			city: supplier.address.city,
		})) || [],
		generateCsvFilename("base_fornecedores")
	);

	const filteredSuppliers = suppliers
		?.filter((supplier) =>
			supplier.name.toLowerCase().includes(search.toLowerCase())
		)
		?.sort((a, b) => a.name.localeCompare(b.name));

	const isEmptySuppliers = filteredSuppliers?.length === 0;

	const { currentPage, currentItems, totalPages, goToPage } = usePagination(
		filteredSuppliers || [],
		10
	);

	return (
		<S.SupplierArea>
			<Container>
				{isError && (
					<S.StatusText className="error">
						<CloudAlert size={18} color="red" /> Erro ao carregar
						fornecedores
					</S.StatusText>
				)}
				<S.TableHeader>
					<S.TableHeaderFilters>
						<S.TableHeaderSearchForm
							id="form-search-list-suppliers"
							onSubmit={handleSearch}
						>
							<S.TableHeaderSearchInput
								type="text"
								id="input-search-list-suppliers"
								placeholder="Pesquisar nome fornecedor"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<Button
								size="icon"
								type="submit"
								id="button-search-list-suppliers"
							>
								<Search size={20} />
							</Button>
						</S.TableHeaderSearchForm>

						<S.Row>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={exportToCsv}
										disabled={true}
									>
										<Filter size={20} />
										Filtrar
									</Button>
								</TooltipTrigger>
								<TooltipContent>Em breve</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										size="icon"
										variant="ghost"
										onClick={exportToCsv}
									>
										<Download size={20} />
									</Button>
								</TooltipTrigger>
								<TooltipContent>Baixar CSV</TooltipContent>
							</Tooltip>
						</S.Row>
					</S.TableHeaderFilters>
					<Dialog.Root
						open={openAddSupplier}
						onOpenChange={setOpenAddSupplier}
					>
						<Dialog.Trigger asChild>
							<Button>
								<User size={20} />
								Adicionar fornecedor
							</Button>
						</Dialog.Trigger>
						<Dialog.Overlay />
						<Dialog.Content>
							<Dialog.Title>
								Adicione um novo fornecedor
							</Dialog.Title>
							<Dialog.Description>
								Insira um novo fornecedor preenchendo os campos
								a seguir.
							</Dialog.Description>
							<Dialog.Close />
							<AddSupplierDialog setOpen={setOpenAddSupplier} />
						</Dialog.Content>
					</Dialog.Root>
				</S.TableHeader>
				<S.Table>
					<thead>
						<tr>
							<th style={{ width: "25%" }}>Nome</th>
							<th style={{ width: "35%" }}>Descrição</th>
							<th style={{ width: "10%" }}>Estado</th>
							<th style={{ width: "20%" }}></th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{isLoading &&
							Array.from({ length: 5 }).map((_, index) => (
								<SkeletonTable key={index} />
							))}
						{!isEmptySuppliers ? (
							currentItems?.map((supplier) => (
								<tr
									key={supplier.id}
									id={`item-${supplier.id}`}
								>
									<td>
										<S.HeadingCell>Nome</S.HeadingCell>
										{truncateText(supplier.name, 25) || "-"}
									</td>
									<td>
										<S.HeadingCell>Descrição</S.HeadingCell>
										{truncateText(
											supplier.description,
											30
										) || "-"}
									</td>

									<td>
										<S.HeadingCell>Estado</S.HeadingCell>
										{supplier.address.state}
									</td>

									<td>
										<S.HeadingCell>Cidade</S.HeadingCell>
										{supplier?.address?.city || "-"}
									</td>
									<td>
										<S.Actions>
											<Dialog.Root>
												<Dialog.Trigger asChild>
													<Button
														variant="outline"
														size="icon"
														onClick={() => {
															setSelectedSupplier(
																supplier
															);
														}}
													>
														<Eye size={18} />
													</Button>
												</Dialog.Trigger>
												<Dialog.Overlay />
												<Dialog.Content>
													<Dialog.Close />
													<Dialog.Title>
														Visualizar fornecedor
													</Dialog.Title>
													<Dialog.Description>
														Visualize os dados do
														fornecedor
													</Dialog.Description>
													<ViewSupplierDialog />
												</Dialog.Content>
											</Dialog.Root>
											<Dialog.Root>
												<Dialog.Trigger asChild>
													<Button
														variant="success"
														size="icon"
														onClick={() => {
															setSelectedSupplier(
																supplier
															);
														}}
													>
														<Edit size={18} />
													</Button>
												</Dialog.Trigger>
												<Dialog.Overlay />
												<Dialog.Content>
													<Dialog.Close />

													<Dialog.Title>
														Editar Fornecedor
													</Dialog.Title>
													<Dialog.Description>
														Preencha os campos
														abaixo para atualizar os
														dados.
													</Dialog.Description>
													<EditSupplierDialog />
												</Dialog.Content>
											</Dialog.Root>
											<AlertDialog>
												<AlertDialog.Trigger>
													<Button
														size="icon"
														variant="destructive"
														onClick={() => {
															setSelectedSupplier(
																supplier
															);
														}}
													>
														<Trash size={18} />
													</Button>
												</AlertDialog.Trigger>
												<AlertDialog.Overlay />
												<AlertDialog.Content>
													<AlertDialog.Title>
														Excluir Fornecedor
													</AlertDialog.Title>
													<AlertDialog.Description>
														Você tem certeza que
														deseja excluir este
														fornecedor?
													</AlertDialog.Description>
													<DeleteSupplierDialog />
												</AlertDialog.Content>
											</AlertDialog>
										</S.Actions>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={5}>
									<S.StatusText>
										Nenhum fornecedor encontrado
									</S.StatusText>
									<Button
										variant="outline"
										onClick={handleClearSearch}
									>
										<SearchX size={18} />
										Limpar pesquisa
									</Button>
								</td>
							</tr>
						)}
					</tbody>
				</S.Table>
				{filteredSuppliers && filteredSuppliers?.length > 10 && (
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={goToPage}
					/>
				)}
			</Container>
		</S.SupplierArea>
	);
};

export { SupplierList };

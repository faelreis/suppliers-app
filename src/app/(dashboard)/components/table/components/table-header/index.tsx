"use client";

import { Button } from "@/components/commons/button";
import { Download, Filter, User } from "lucide-react";
import { Dialog } from "@/components/primitives/dialog/index";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/primitives/tooltip";
import * as S from "./styles";
import { SearchBar } from "../search-bar";
import { AddSupplierDialog } from "../../../forms/add-supplier-dialog";

export const TableHeader = ({
	exportToCsvAction,
	openAddSupplier,
	setOpenAddSupplierAction,
	searchInput,
	setSearchInputAction,
	handleSearchAction,
}: {
	exportToCsvAction: () => void;
	openAddSupplier: boolean;
	setOpenAddSupplierAction: (open: boolean) => void;
	searchInput: string;
	setSearchInputAction: (value: string) => void;
	handleSearchAction: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<S.TableHeader>
			<S.TableHeaderFilters>
				<SearchBar
					searchInput={searchInput}
					handleSearchAction={handleSearchAction}
					setSearchInputAction={setSearchInputAction}
				/>
				<S.Row>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline" disabled>
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
								onClick={exportToCsvAction}
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
				onOpenChange={setOpenAddSupplierAction}
			>
				<Dialog.Trigger asChild>
					<Button>
						<User size={20} />
						Adicionar fornecedor
					</Button>
				</Dialog.Trigger>
				<Dialog.Overlay />
				<Dialog.Content>
					<Dialog.Title>Adicione um novo fornecedor</Dialog.Title>
					<Dialog.Description>
						Insira um novo fornecedor preenchendo os campos a
						seguir.
					</Dialog.Description>
					<Dialog.Close />
					<AddSupplierDialog setOpen={setOpenAddSupplierAction} />
				</Dialog.Content>
			</Dialog.Root>
		</S.TableHeader>
	);
};

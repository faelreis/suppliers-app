import { SupplierDash } from "./components/dash";
import { SupplierList } from "./components/table";
import { Header } from "@/components/commons/header";

export default async function DashboardPage() {
	return (
		<>
			<Header />
			<main>
				<SupplierDash />
				<SupplierList />
			</main>
		</>
	);
}

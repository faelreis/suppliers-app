import { Footer } from "@/components/commons/footer";
import { SupplierHero } from "./components/hero";
import { SupplierList } from "./components/table";

export default async function DashboardPage() {
	return (
		<>
			<main>
				<SupplierHero />
				<SupplierList />
			</main>
			<Footer />
		</>
	);
}

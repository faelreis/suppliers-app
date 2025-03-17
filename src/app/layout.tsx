import StyledComponentsRegistry from "@/libs/styled-components/registry";
import { ReactQueryProvider } from "@/providers/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
	display: "swap",
	variable: "--inter",
});

export const metadata: Metadata = {
	title: "SuppliersApp - Reis",
	description:
		"Aplicativo desenvolvido para facilitar o gerenciamento de fornecedores, com funcionalidades para controle de informações, contratos e comunicações, gerado pelo Create Next App.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${inter.variable}`}
				suppressHydrationWarning={true}
			>
				<ReactQueryProvider>
					<StyledComponentsRegistry>
						{children}
					</StyledComponentsRegistry>
					<Toaster />
				</ReactQueryProvider>
			</body>
		</html>
	);
}

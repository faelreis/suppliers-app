import { useCallback } from "react";

type UseExportCsvReturn = {
	exportToCsv: () => void;
};

export const useExportCsv = <T extends Record<string, unknown>>(
	data: T[],
	filename: string
): UseExportCsvReturn => {
	const exportToCsv = useCallback(() => {
		if (!data || data.length === 0) {
			console.error("Nenhum dado fornecido para exportar.");
			return;
		}

		const headers = Object.keys(data[0]).join(",") + "\n";

		const csvRows = data.map((row) =>
			Object.values(row)
				.map((value) => {
					const valueStr = value == null ? "" : String(value);
					return `"${valueStr.replace(/"/g, '""')}"`;
				})
				.join(",")
		);

		const csvContent = headers + csvRows.join("\n");

		const blob = new Blob(["\uFEFF" + csvContent], {
			type: "text/csv;charset=utf-8;",
		});

		const link = document.createElement("a");
		const url = URL.createObjectURL(blob);
		link.setAttribute("href", url);
		link.setAttribute("download", filename);
		link.style.visibility = "hidden";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}, [data, filename]);

	return { exportToCsv };
};

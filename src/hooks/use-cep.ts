import { CepServices } from "@/api/cep";
import { useQuery } from "@tanstack/react-query";

export const useCep = (cep: string) => {
	return useQuery<ViaCEPResponse, Error>({
		queryKey: ["cep", cep],
		queryFn: async () => {
			const res = await CepServices().get(cep);
			return res.data;
		},
		enabled: !!cep,
	});
};

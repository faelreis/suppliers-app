import { apiViaCep } from "@/services/viacep";

export const CepServices = () => {
	return {
		get: (cep: string) =>
			apiViaCep.get<ViaCEPResponse>(`/${cep.toString()}/json`),
	};
};

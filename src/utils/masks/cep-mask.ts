export const cepMask = (value: string) => {
	return value.replace(/(\d{5})(\d{0,3})/, "$1-$2");
};

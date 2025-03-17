export const removeSpecialCharacters = (text: string) => {
	if (!text) return text;
	return text
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9]/g, "");
};

export const truncateText = (
	text: string | undefined,
	maxLength: number,
	suffix: string = "..."
): string => {
	if (!text) {
		return "";
	}

	if (text.length <= maxLength) {
		return text;
	}

	return text.slice(0, maxLength) + suffix;
};

export const getFirstLetter = (name: string) => {
	return name[0].toUpperCase();
};

export const formatZipCode = (zipCode: string) => {
	if (!zipCode) return "-";

	const numericZipCode = zipCode.replace(/\D/g, "");

	return numericZipCode.replace(/(\d{5})(\d{3})/, "$1-$2");
};

export const formatPhoneNumber = (phone: string) => {
	if (!phone) return "-";

	const numericPhone = phone.replace(/\D/g, "");

	if (numericPhone.length === 11) {
		return numericPhone.replace(
			/(\d{2})(\d{1})(\d{4})(\d{4})/,
			"($1) $2 $3-$4"
		);
	}

	return numericPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
};

export const sanitizePhoneNumber = (phoneNumber: string) => {
	return phoneNumber.replace(/[^\d]/g, "");
};

export const sanitizedZipCode = (zipCode: string): string => {
	return zipCode.replace("-", "");
};

export const getFirstName = (fullName: string) => {
	return fullName.split(" ")[0];
};

export const generateCsvFilename = (baseName: string): string => {
	const today = new Date();

	const day = String(today.getDate()).padStart(2, "0");
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const year = today.getFullYear();

	const formattedDate = `${day}-${month}-${year}`;

	return `${baseName
		.replace(/\s+/g, "_")
		.toLowerCase()}_${formattedDate}.csv`;
};

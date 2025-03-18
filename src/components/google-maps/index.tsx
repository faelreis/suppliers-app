import { Address } from "@/@types/supplier";
import * as S from "./styles";

type AddressWithoutReference = Omit<Address, "reference">;

export const GoogleMaps = ({
	street,
	number,
	city,
	state,
	zipCode,
}: AddressWithoutReference) => {
	const address = `${street}, ${number}, ${city}, ${state}, ${zipCode}`;
	const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
		address
	)}&output=embed`;

	return (
		<S.IframeGoogleMaps
			src={mapsUrl}
			width="100%"
			height="400"
			style={{ border: 0 }}
			allowFullScreen
			loading="lazy"
		></S.IframeGoogleMaps>
	);
};

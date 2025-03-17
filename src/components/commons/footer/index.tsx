"use client";

import { Container } from "../container";
import * as S from "./styles";

export const Footer = () => {
	return (
		<S.Footer>
			<Container>
				<S.FooterContent
					href="https://www.rafaelreisfranco.com?ref=app-suppliers"
					target="_blank"
				>
					<p>Created by Reis</p>
				</S.FooterContent>
			</Container>
		</S.Footer>
	);
};

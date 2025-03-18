"use client";

import Image from "next/image";
import { Container } from "../container";
import * as S from "./styles";

import Logo from "@/assets/logo/logo-supplier.svg";

export const Header = () => {
	return (
		<S.Header>
			<Container>
				<S.HeaderWrap>
					<Image
						src={Logo}
						alt="Logo Suppliers"
						title="Logo Suppliers"
					/>
					<S.HeaderActions>
						<S.Profile>
							<S.ProfileImage>
								<Image
									src="https://avatars.githubusercontent.com/faelreis"
									alt="Rafael Reis"
									title="Rafael Reis"
									width={40}
									height={40}
									quality={100}
								/>
							</S.ProfileImage>
							<S.ProfileInfo>
								<S.ProfileName>Rafael Reis</S.ProfileName>
								<S.ProfileRule>Administrador</S.ProfileRule>
							</S.ProfileInfo>
						</S.Profile>
					</S.HeaderActions>
				</S.HeaderWrap>
			</Container>
		</S.Header>
	);
};

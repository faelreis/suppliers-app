import { cover, flex } from "@/styles/mixins";
import { Text14Regular } from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const Header = styled.header`
	padding: 1.2rem 0;
	background-color: ${variables.colors.white}50;
	backdrop-filter: blur(10px);
	position: fixed;
	top: 0;
	width: 100%;
`;

export const HeaderWrap = styled.div`
	${flex("row", "center", "space-between", "1.6rem")}
`;

export const HeaderActions = styled.div`
	${flex("row", "center", "space-between", "1.6rem")}
`;

export const Profile = styled.div`
	${flex("row", "center", "center", "0.8rem")}
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	padding: 0.8rem;

	&:hover {
		background-color: ${variables.colors.primary.brand}20;
		border-radius: 0.8rem;

		img {
			transform: scale(1.1);
		}
	}
`;

export const ProfileInfo = styled.div`
	${flex("column", "center", "center")}

	@media(max-width: 400px) {
		display: none;
	}
`;

export const ProfileName = styled.span`
	${Text14Regular}
`;

export const ProfileImage = styled.picture`
	${cover}
	width: 4rem;
	height: 4rem;
	border-radius: 4rem;

	img {
		transition: all 0.3s ease-in-out;
	}
`;

export const ProfileRule = styled.span`
	${Text14Regular}
	font-size: 1.2rem;

	color: ${variables.colors.gray[1]};
`;

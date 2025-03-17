import { getFirstLetter } from "@/utils";

import * as S from "./styles";

type AvatarProps = {
	name: string;
};

export const Avatar = ({ name }: AvatarProps) => {
	return (
		<S.StyledAvatar>
			<S.StyledAvatarLetter>{getFirstLetter(name)}</S.StyledAvatarLetter>
		</S.StyledAvatar>
	);
};

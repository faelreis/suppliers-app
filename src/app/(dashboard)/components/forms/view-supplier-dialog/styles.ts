import { flex } from "@/styles/mixins";
import {
	DividerLineTemplate,
	FieldsetWrapTemplate,
	LabelTemplate,
	SubtitleTemplate,
	Text14Regular,
	Text18Regular,
	TextAreaTemplate,
} from "@/styles/patterns";
import variables from "@/styles/variables";
import Link from "next/link";
import styled from "styled-components";

export const Area = styled.div`
	max-height: 40rem;
	overflow-y: scroll;
	padding-bottom: 3.2rem;
`;

export const Heading = styled.div`
	${flex("row", "center", "flex-start", "0.8rem")}
`;

export const HeadingText = styled.h3`
	${Text18Regular}
`;

export const Fieldset = styled.fieldset``;

export const FieldsetWrap = styled.div`
	${FieldsetWrapTemplate}
`;

export const Label = styled.label`
	${LabelTemplate}
`;

export const Text = styled.span`
	${Text14Regular}
	color: ${variables.colors.gray[1]};
`;

export const DividerLine = styled.div`
	${DividerLineTemplate}
`;

export const Textarea = styled.textarea`
	${TextAreaTemplate}
`;

export const FormSubtitle = styled.span`
	${SubtitleTemplate}
`;

export const Row = styled.div`
	${flex("row", "flex-end", "space-between", "1.6rem")}

	@media(max-width: 768px) {
		flex-direction: column;
		a {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	.span-2 {
		grid-column: span 2;
	}

	.span-3 {
		grid-column: span 3;
	}

	.span-4 {
		grid-column: span 4;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Spacing = styled.div`
	height: 3.2rem;
`;

export const WhatsAppLink = styled(Link)`
	${flex("row", "center", "space-between", "0.8rem")}
	padding: 0.8rem;
	border: 1px solid #41e85f;
	background-color: #41e85f10;
	border-radius: 0.8rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

import {
	ButtonsWrapTemplate,
	DialogFormTemplate,
	DividerLineTemplate,
	ErrorMessageTemplate,
	FieldsetWrapTemplate,
	InputTemplate,
	LabelTemplate,
	SubtitleTemplate,
	Text14Regular,
	TextAreaTemplate,
} from "@/styles/patterns";
import variables from "@/styles/variables";
import styled from "styled-components";

export const Form = styled.form`
	${DialogFormTemplate}
`;

export const Fieldset = styled.fieldset`
	input,
	textarea {
		${InputTemplate}
	}

	textarea {
		${TextAreaTemplate}
	}
`;

export const FieldsetWrap = styled.div`
	${FieldsetWrapTemplate}
`;

export const Input = styled.input`
	${InputTemplate}
`;

export const Label = styled.label`
	${LabelTemplate}
`;

export const Text = styled.span`
	${Text14Regular}
	color: ${variables.colors.gray[1]};
`;

export const Textarea = styled.textarea`
	${TextAreaTemplate}
`;

export const DividerLine = styled.div`
	${DividerLineTemplate}
`;

export const FormSubtitle = styled.span`
	${SubtitleTemplate}
`;

export const ButtonsWrap = styled.div`
	${ButtonsWrapTemplate}
`;

export const ErrorMessage = styled.span`
	${ErrorMessageTemplate}
`;

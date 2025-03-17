import { css } from "styled-components";
import variables from "./variables";
import { flex } from "./mixins";

export const Container = css`
	max-width: 1246px;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 1050px) {
		padding-left: 2.4rem;
		padding-right: 2.4rem;
	}
`;

export const Title32Bold = `
	font-size: 3.2rem;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: 0.02em;
	text-decoration: none;
	text-transform: none;

	@media (max-width: 730px){
		font-size: 2.4rem;
	}
`;

export const Title28Semibold = `
	font-size: 2.8rem;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 0.02em;
	text-decoration: none;
	text-transform: none;
`;

export const Title24Bold = `
	font-size: 2.4rem;
	font-weight: 700;
	line-height: 120%;
	text-decoration: none;
	text-transform: none;

	@media (max-width: 730px){
		font-size: 1.8rem;
	}
`;

export const Title24Italic = `
	font-size: 2.4rem;
	font-weight: 700;
	font-style: italic;
	line-height: 120%;
	letter-spacing: 0.02em;
	text-decoration: none;
	text-transform: uppercase;

	@media (max-width: 730px){
		font-size: 1.8rem;
	}
`;

export const Title20BoldUppercase = `
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-decoration: none;
	text-transform: uppercase;


	@media (max-width: 730px){
		font-size: 1.8rem;
	}
`;

export const Title20Bold = `
	font-size: 2rem;
	font-weight: 700;
	text-decoration: none;


	@media (max-width: 730px){
		font-size: 1.8rem;
	}
`;

export const Title20Medium = `
	font-size: 2rem;
	font-weight: 500;
	text-decoration: none;


	@media (max-width: 730px){
		font-size: 1.8rem;
	}
`;

export const Text20Regular = `
	font-size: 2rem;
	font-weight: 400;
	line-height: 150%;
	text-decoration: none;
	text-transform: none;


	@media (max-width: 730px){
		font-size: 1.8rem;
	}
`;

export const Text18Bold = `
	font-size: 1.8rem;
	font-weight: 700;
	line-height: 150%;
	text-decoration: none;
	text-transform: none;

	@media (max-width: 730px){
		font-size: 1.6rem;
		line-height: 150%;
	}
`;

export const Text18Regular = `
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 150%;
	text-decoration: none;
	text-transform: none;

	@media (max-width: 730px){
		font-size: 1.6rem;
		line-height: 150%;
	}
`;

export const Text16Bold = `
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 150%;
	text-decoration: none;
	text-transform: none;
`;

export const Text16Regular = `
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 150%;
	text-decoration: none;
	text-transform: none;
`;

export const Text14Regular = `
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
`;

export const InputTemplate = css`
	padding: 0.8rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.07);
	box-shadow: 0px 1px 3px 0px rgba(11, 19, 36, 0.08),
		0px -1px 0px 0px rgba(0, 0, 0, 0.09) inset;
	${Text16Regular}
	transition: all 0.2s ease-in-out;

	&:focus,
	&:focus-within {
		border: 1px solid ${variables.colors.primary.brand}50;
	}

	&:disabled {
		cursor: not-allowed;
		border: 1px solid #ddd;
		opacity: 0.7;
	}

	&.error {
		border: 1px solid red;
	}

	&[type="number"]::-webkit-inner-spin-button,
	&[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
	}
`;

export const TextAreaTemplate = css`
	${InputTemplate}
	resize: vertical;
	min-height: 10rem;
`;

export const SelectTemplate = css`
	${InputTemplate}
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
`;

export const LabelTemplate = css`
	color: #777984;
	${Text14Regular}
	transition: color 0.2s ease-in-out;

	div:has(.error) > & {
		color: red;
	}
`;

export const LabelCheckboxTemplate = css`
	display: inline-block;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 0.4rem;
	position: relative;
	cursor: pointer;

	.checkbox {
		position: absolute;
		top: 0;
		left: 0;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 0.4rem;
		background-color: ${variables.colors.black[6]};
	}
`;

export const FieldsetWrapTemplate = css`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	gap: 1.6rem;

	&.withicon {
		${flex("row", "flex-start", "flex-start", "1.6rem")}
	}
`;

export const FormTemplate = css`
	width: 100%;

	fieldset {
		&.wrap {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
			gap: 1.6rem;
		}
	}

	& > span {
		${Text16Regular}
		color: #777984;
	}

	label {
		${LabelTemplate}
	}

	input[type="text"],
	input[type="email"],
	textarea {
		${InputTemplate}
	}

	textarea {
		${TextAreaTemplate}
	}
`;

export const ErrorMessageTemplate = css`
	display: block;
	color: red;
	${Text14Regular}
	margin-top: 0.4rem;
`;

export const ButtonsWrapTemplate = css`
	margin-top: 1.6rem;
	${flex("row", "flex-start", "center", "0.8rem")}
`;

export const SubtitleTemplate = css`
	${Text16Regular}
	color: ${variables.colors.gray[1]};
`;

export const DividerLineTemplate = css`
	margin: 0.8rem 0;
	width: 100%;
	height: 1px;
	background-color: ${variables.colors.gray[2]};
`;

export const DialogFormTemplate = css`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1.6rem;
	max-height: 40rem;
	overflow-y: scroll;
	padding-bottom: 3.2rem;
`;

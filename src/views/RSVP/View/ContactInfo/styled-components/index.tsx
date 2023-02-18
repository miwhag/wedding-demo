/** @format */

import styled from 'styled-components';
export const KidsContainer = styled.div`
	padding-top: 2rem;
`;

export const AddChildLink = styled.a`
	margin: 2rem 0rem;
	max-width: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
	color: #3378cf;
	:hover {
		cursor: pointer;
		color: #99bbe6;
	}
`;
export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem 1rem 0rem;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem 0rem;
	}
`;

export const Heading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: 'Circular-Book';
	font-size: 20px;
`;

export const SubHeading = styled.div`
	display: flex;
	justify-content: start;
	text-align: start;
	font-family: 'Circular-Book';
	font-size: 18px;
	padding: 0px 0px 0px 0px;
	margin: 0;
	&.select-dropdown {
		padding-bottom: 1.2rem;
	}
	@media only screen and (max-width: 900px) {
		max-width: 340px;
	}
`;

export const ContactInfoSection = styled.div`
	max-width: 1000px;
	width: 100%;
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	padding-top: 3rem;
	margin: 1rem;

	@media only screen and (min-width: 900px) {
		padding-top: 8rem;
	}

	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Circular-Light';
		color: #343232;
	}
	p.main-sub-heading {
		text-align: center;
		padding-top: 10px;
	}
`;

export const InputContainer = styled.div`
	padding-right: 20px;
	&.input-group {
		margin: 10px 0px;
		width: 100%;
		@media only screen and (min-width: 900px) {
			max-width: 300px;
		}
	}
	&.input-gap {
		padding-bottom: 15px;
	}
`;

export const Form = styled.form`
	padding: 1rem;
	label {
		font-size: 14px;
		padding-bottom: 5px;
	}

	&:focus {
		outline: none;
	}
`;

export const ContactFeild = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: start;
	&.plus-one-field {
		display: flex;
		flex-direction: column;
		padding: 0px 0px 20px 0px;
		margin: 0;
	}
	&.children-field {
		display: flex;
		flex-direction: column;
		.message-container {
			background-color: whitesmoke;
			padding: 0rem 2rem;
			border-radius: 5px;
			margin: 1.5rem 0rem;
			max-width: 900px;
		}
		p.title {
			font-family: 'Circular-Medium';
			padding-top: 2rem;
			font-size: 16px;
		}
		p.description {
			line-height: 18px;
			font-size: 16px;
			padding: 0px 0px 20px 0px !important;
		}
	}
`;

export const ImageContainer = styled.div`
	&.delete-button {
		border-radius: 4px;
		height: 40px;
		width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		cursor: pointer;
		background-color: #fff;
		border: 1px solid lightgray;
		font-size: 15px;
		svg {
			color: #000;
		}
		:hover {
			box-shadow: 2px 2px 10px 2px lightgray;
			border: 1px solid black;
		}
	}
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0rem 6rem 0rem;
	gap: 30px;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

export const RsvpContainer = styled.div`
	padding: 1rem 1rem 0rem 1rem;
`;

export const LineBreak = styled.div`
	height: 1px;
	background-color: whitesmoke;
	width: 100%;
	max-width: '800px';
	margin-bottom: 20px;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

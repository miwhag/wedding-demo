/** @format */

import styled from 'styled-components';

//RSVP Main
export const RsvpContainer = styled.div`
	padding-top: 5rem;
	min-height: 800px;
`;

export const SignUpForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	background-color: white;

	@media only screen and (max-width: 900px) {
		min-width: unset;
		border: unset;
		padding-top: 0rem;
	}
`;

//Start Modal

export const Heading = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: unset;
	h1 {
		margin: 10px 0px 0px 0px;
		padding: 0;
	}
	p {
		margin: 20px 0px 20px 0px;
	}
	.bold {
		font-family: 'Circular-Medium';
	}
	@media only screen and (max-width: 900px) {
		max-width: 250px;
		text-align: center;
		padding-bottom: 10px;
	}
`;

export const ButtonContainer = styled.div`
	margin: 2rem 0px;
`;

export const ErrorMessage = styled.p`
	font-family: 'Circular-Book';
	font-size: 14px;
	background-color: #ffdddd;
	color: #ff3333;
	padding: 20px;
	max-width: 300px;
	border-radius: 2px;
	text-align: center;
	@media only screen and (max-width: 600px) {
		max-width: 270px;
	}
`;

export const StartPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10rem;
	height: 75vh;
	min-width: 320px;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	padding: 4rem 1rem;
	height: 80vh;
	h1 {
		font-size: 25px;
		color: black;
		font-weight: 300;
		text-align: center;
		font-family: 'Lazydog';
	}
`;

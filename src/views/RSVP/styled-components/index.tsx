/** @format */

import styled from 'styled-components';

//RSVP Main
export const RsvpContainer = styled.div`
	padding-top: 5rem;
	min-height: 85vh;
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
	.bold {
		font-family: 'Circular-Medium';
	}
	@media only screen and (max-width: 900px) {
		max-width: 280px;
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
	min-width: 320px;
	@media only screen and (max-width: 600px) {
		padding-top: 8rem;
	}
`;

export const Title = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	font-family: 'Circular-Book';
	font-size: 30px;
	align-self: center;
	margin-top: 3rem;
	padding: 0;
	@media only screen and (max-width: 600px) {
		font-size: 20px;
		margin-top: 4rem;
	}
`;

export const SubTitle = styled.div`
	padding: 15px;
	font-family: 'Circular-Light';
	font-size: 17px;
`;

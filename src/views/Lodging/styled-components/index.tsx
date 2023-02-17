/** @format */

import styled, { keyframes } from 'styled-components';

export const SubTitle = styled.div`
	font-family: 'Circular-Book';
	font-size: 30px;
	align-self: flex-start;
	margin: 1rem 0px 0rem 0px;
	padding: 0;
	@media only screen and (max-width: 900px) {
		font-size: 25px;
		text-align: start;
	}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	.airbnb-block {
		display: flex;
		flex-direction: column;
		align-self: center;
		padding-top: 4rem;
	}
	.section {
		max-width: 1100px;
	}
	.bold {
		font-family: 'Circular-Medium';
		font-size: 20px;
		padding-bottom: 5px;
	}
`;

export const ImageContainer = styled.div`
	height: 100%;
	border-radius: 5px 5px 0px 0px;
	img {
		border-radius: 5px 5px 0px 0px;
		width: 100%;
		height: 100%;
	}
	&#airbnb {
		max-width: 100px;
		padding: 1rem 0rem;
		margin: auto;
	}
	&#distance {
		max-width: 700px;
		margin: 20px 0px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
	}
	&#map {
		box-shadow: 0px 0px 10px 2px #ededed;
	}
	&.line-break {
		height: 200px;
	}
`;

export const bounce = keyframes`
  0%{
	transform: translateY(0);
  }
  50%{
	transform: translateY(-15px);
  }
  100% {
	transform: translateY(0px);
  }
`;

export const LodgingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	#lodging-description {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		p {
			font-size: medium !important;
			max-width: 800px;
			margin: 1rem;
		}
	}
	@media only screen and (max-width: 900px) {
		padding: 0rem 1rem;
	}
`;

export const LodgingPage = styled.div`
	width: 100%;
	max-width: 1100px;
	padding: 12rem 0rem 2rem 0rem;
	margin: auto;
	@media only screen and (max-width: 900px) {
		padding: 8rem 0rem 2rem 0rem;
	}
`;

export const ContentCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const AdditionalContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	padding: 1rem 0rem;

	@media only screen and (max-width: 900px) {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export const AdditionalButton = styled.div`
	height: 150px;
	width: 150px;
	border-radius: 100px;
	background-color: #000;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-decoration: none;
	text-align: center;
	#airbnb-button-content {
		display: none;
	}
	&:hover {
		cursor: pointer;
		span {
			display: none;
		}
		background-color: #ff5a5f;
		color: #ffffff;
		#airbnb-button-content {
			display: block;
			img {
				max-width: 20px;
				margin-left: 5px;
			}
		}
	}
	@media only screen and (max-width: 900px) {
		height: 70px;
		width: 165px;
		border-radius: 5px;
		margin: 2px;
	}
`;

export const Accent = styled.div`
	height: 5px;
	width: 100px;
	opacity: 1;
	background-color: rgba(0, 0, 255, 0.2);
	margin: 3rem 0rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5px;
`;

export const AdditionalLodging = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0rem 6rem 0rem;
	min-height: 400px;
`;

export const LodgeContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
	.lodge {
		margin: 30px;
		padding: 15px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 150px;
		box-shadow: -12px -12px 1px 0px rgba(0, 0, 255, 0.2);
		border: 1px solid black;
	}
`;

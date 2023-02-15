/** @format */
import styled from 'styled-components';

export const Offsite = styled.div`
	height: 70px;
	width: 100%;
	background-color: #effaff;
	color: #476aa1;
	display: flex;
	align-items: center;
	font-size: 16px;
	margin-top: 1rem;
	svg {
		font-size: 25px;
		margin-right: 10px;
	}
`;
export const ErrorMessage = styled.div`
	background-color: #ffdddd;
	color: #ff3333;
	padding: 20px;
`;
export const ArrowContainer = styled.div`
	font-size: 20px;
	font-weight: 900;
	padding: 5px 0px 0px 5px;
	transform: rotate(0deg);
	transition: transform 0.2s linear;
	svg {
		color: #fff;
	}
	&.arrow-up {
		transform: rotate(180deg);
		transition: transform 0.1s linear;
	}
`;

export const ViewMoreButton = styled.div<{ visible: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: ${(p) => (!p.visible ? '1%' : '5%')};
	left: 43%;
	background-color: #242424;
	color: white;
	opacity: 1;
	padding-left: 15px;
	border-radius: 40px;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.4);
	font-size: 14px;
	padding: 10px 30px;
	:hover {
		cursor: pointer;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.65);
	}
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export const CabinListContainer = styled.div`
	position: relative;
	height: 385px;
	overflow: hidden;
	margin-top: 0rem;
	transition: height 0.2s ease;
	&.open {
		height: 1900px;
		padding-bottom: 10rem;
		@media only screen and (max-width: 900px) {
			height: 550px;
			padding-bottom: 0rem;
		}
	}

	@media only screen and (max-width: 900px) {
		overflow: scroll;
		height: 500px;
		margin-bottom: 0px;
		max-width: 350px;
	}
`;
export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	margin: 6rem 0rem 5rem 0rem;
	gap: 30px;
	max-width: 450px;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		margin: 3rem 0rem 5rem 0rem;
	}
`;

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 1rem;
	width: 100%;
	max-width: 1150px;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 0px 0px 10px 0px;
	}
`;

export const CabinInfoSection = styled.div`
	max-width: 1200px;
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: start;
	position: relative;
	margin: 8rem 1rem 1rem 1rem;
	@media only screen and (max-width: 900px) {
		margin: 5rem 1rem 1rem 1rem;
	}

	.title {
		font-family: 'Circular-Medium';
		padding-top: 1rem;
		font-size: 16px;
	}

	.stepper-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-bottom: 2rem;
	}
	.sub-heading {
		font-size: 18px;
		margin: 1rem 0rem;
		color: #343232;
		font-weight: 500;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-weight: 300;
		color: #343232;
	}
	.description {
		line-height: 20px;
		font-size: 16px;
		@media only screen and (min-width: 900px) {
			padding-right: 8rem;
		}
	}
	.line-divider {
		border-bottom: 1px solid whitesmoke;
		padding-bottom: 1rem;
	}
`;

export const CabinCardsContainer = styled.div`
	max-width: 1400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-wrap: nowrap;
		justify-content: start;
	}
`;

export const SelectedCabinContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.07);
	margin-top: 2rem;
	.selected-p {
		display: none;
	}
	@media only screen and (min-width: 900px) {
		flex-direction: row;
		.selected-p {
			display: block;
		}
	}
`;

export const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 150px;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 5px 5px 0px 0px;
	width: 100%;
	@media only screen and (min-width: 900px) {
		height: 200px;
		margin: 20px;
		max-width: 300px;
		border-radius: 5px;
	}
`;

export const ViewMoreLink = styled.div`
	display: none;
	@media only screen and (min-width: 900px) {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 2rem 1rem 0rem;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		:hover {
			cursor: pointer;
			color: #3378cf;
		}
	}
`;

export const SelectedContent = styled.div`
	padding: 1rem;
	h1 {
		margin: 20px 0px;
		font-size: 24px;
		@media only screen and (min-width: 900px) {
			font-size: 30px;
		}
	}
	p {
		margin: 0;
		font-size: 15px;
		max-width: 960px;
		padding-right: 4rem;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media only screen and (min-width: 900px) {
		padding-right: 3rem;
	}
`;

export const SelectedCabinSection = styled.div`
	margin: 2rem 0rem;
	padding-bottom: 1rem;
`;

export const DeselectButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #ff3333;
	height: 50px;
	text-transform: none;
	font-size: 14px;
	color: #ffdddd;
	padding-right: 0;
	margin-top: 15px;
	cursor: pointer;
	&:hover {
		background-color: #ffdddd;
		color: #ff3333;
	}
	@media only screen and (min-width: 900px) {
		max-width: 200px;
		border-radius: 100px;
	}
`;

/** @format */
import styled from 'styled-components';

export const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 300px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 5px;
	width: 100%;
	@media only screen and (min-width: 900px) {
		height: 500px;
		min-width: 500px;
	}
`;

export const Title = styled.div`
	padding: 1rem 2rem 2rem 3rem;
	max-width: 600px;
	@media only screen and (max-width: 1200px) {
		padding: 0rem;
	}

	p.spots-remaining {
		font-size: 16px;
		padding: 1rem 0rem;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.airbnb-link {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0px;
		gap: 5px;
		text-decoration: underline;
		:hover {
			cursor: pointer;
			color: lightgray;
		}
	}
`;

export const ExitButton = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 2rem 20px 0px 0px;
	font-size: 25px;
	svg {
		z-index: 10001;
		padding-right: 15px;
		:hover {
			cursor: pointer;
		}
	}
`;

export const CabinSpotContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 1rem;
	span {
		font-family: 'Circular-Light';
	}
`;

export const CabinSpot = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	width: 170px;
	padding: 5px;
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		&.spot-number {
			font-size: 12px;
			background-color: ${(p) => p.color && p.color};
			min-width: 25px;
			height: 25px;
			color: white;
			margin-right: 10px;
			border-radius: 10px;
		}
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 4rem 1rem 3rem 1rem;
`;

export const ContentGroup = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`;

export const Heading = styled.div`
	padding-top: 0px;
	font-size: 40px;
	font-family: 'Circular-Book';
	@media only screen and (max-width: 900px) {
		font-size: 30px;
		padding-top: 20px;
	}
`;

export const TypeLabel = styled.div<{ color: string }>`
	height: 50px;
	width: 150px;
	border-radius: 2px;
	background-color: ${(p) => p.color && p.color};
	color: white;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.07);
	top: 10px;
	left: 0px;
`;

export const ImageContainer = styled.div`
	position: relative;
`;

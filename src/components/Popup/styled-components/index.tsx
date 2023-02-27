/** @format */
import styled from 'styled-components';

export const Image = styled.div`
	max-width: 700px;
	overflow: hidden;
	img {
		width: 100%;
	}
`;

export const SliderContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	ul {
		list-style-type: none;
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: white !important;
		background-color: black;
		font-size: 15px;
		padding: 10px;
		border-radius: 50%;
		height: 20px;
		width: 20px;
	}
	.swiper-button-next::after,
	.swiper-button-prev::after {
		font-size: 15px;
	}
`;

export const Title = styled.div`
	padding: 0rem 2rem 1rem 3rem;
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
	padding: 0.5rem 0rem 1rem 0rem;
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
	margin: 2rem 1rem 3rem 1rem;
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
	font-size: 30px;
	font-family: 'Circular-Book';
	@media only screen and (max-width: 900px) {
		font-size: 30px;
		padding-top: 20px;
	}
`;

export const TypeLabel = styled.div<{ color: string }>`
	height: 50px;
	width: 100px;
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
	z-index: 1000;
`;

export const ImageContainer = styled.div`
	position: relative;
	max-width: 600px;
`;

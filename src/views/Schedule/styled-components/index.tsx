/** @format */

import styled from 'styled-components';

export const ImageContainer = styled.div<{ align: string }>`
	padding: 2rem;
	transform: ${(p) => (p.align === 'start' ? 'rotate(5deg)' : 'rotate(-5deg)')};
	img {
		max-width: 250px;
	}
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export const SubTitle = styled.div<{ align: string }>`
	font-family: 'Circular-Medium';
	font-size: 38px;
	line-height: 32px;
	padding: 0;
	margin: 0;
	text-align: start;
	@media only screen and (min-width: 900px) {
		font-size: 45px;
		line-height: 33px;
		text-align: ${(p) => p.align};
	}
`;

export const SecondarySubTitle = styled.div<{ align: string }>`
	padding: 0;
	margin: 0;
	font-size: 22px;
	text-align: start;
	margin-top: 10px !important;
	@media only screen and (min-width: 900px) {
		font-size: 30px;
		text-align: ${(p) => p.align};
	}
`;

export const AdditionalSubTitle = styled.div<{ align: string }>`
	text-align: start;
	padding: 0;
	margin: 0;
	font-size: 18px;
	@media only screen and (min-width: 900px) {
		text-align: ${(p) => p.align};
		font-size: 22px;
	}
`;

export const SchedulePage = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	padding: 8rem 1rem 4rem 1rem;

	@media only screen and (min-width: 900px) {
		padding: 12rem 1rem 0rem 1rem;
	}
`;

export const ContentContainer = styled.div<{
	eyebrowColor: string;
	align: string;
	id: string;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	padding: 2rem 0rem;
	@media only screen and (min-width: 900px) {
		flex-direction: row;
		padding: 1rem 0rem;
		background-color: ${(p) =>
			p.align === 'end' ? 'rgba(169, 190, 255, 0.17);' : '#ffffff'};
		min-height: 600px;
		&#weekend {
			min-height: 500px;
			padding-bottom: 4.5rem;
		}
	}

	.eyebrow {
		font-size: 25px;
		font-family: 'Lazydog';
		margin-bottom: 1rem;
		text-align: start;
		@media only screen and (min-width: 900px) {
			font-size: 30px;
			text-align: ${(p) => p.align};
		}
	}
`;

export const ScheduleSection = styled.div<{ align: string }>`
	max-width: 650px;
	margin: 5px;
	p {
		text-align: start;
		font-size: 16.5px;
		text-align: start;
	}

	.padding-top {
		padding-top: 10px;
	}
	.padding-bottom {
		padding-bottom: 10px;
	}

	@media only screen and (min-width: 900px) {
		margin: 0;
		p {
			text-align: ${(p) => p.align};
		}
	}
`;

export const MobileDivider = styled.div`
	width: 200px;
	height: 2px;
	margin: 1rem 0rem 2rem 0rem;
	background-color: whitesmoke;
	display: block;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

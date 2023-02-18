/** @format */

import styled from 'styled-components';

export const BreadcrumbsContainer = styled.div`
	padding: 1rem;
	align-self: flex-start;
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const Title = styled.div`
	max-width: 110px;
	padding: 0;
	margin: 15px 0px 0px;
	img {
		width: 100%;
	}
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

export const SubTitle = styled.div`
	font-family: 'Circular-Book';
	font-size: 20px;
	align-self: flex-start;
	margin: 1rem 0px 0rem 0px;
	padding: 1rem;
	@media only screen and (max-width: 900px) {
		font-size: 18px;
		text-align: start;
		&#general {
			margin: 0;
		}
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 12rem 0rem 8rem 0rem;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media only screen and (max-width: 900px) {
		padding: 8rem 0rem;
	}
`;

export const Category = styled.div`
	display: flex;
	justify-content: start;
	align-items: flex-start;
	width: 100%;
`;
export const ScrollContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	max-width: 1000px;
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const ScrollButton = styled.div`
	height: 120px;
	width: 120px;
	background-color: #ffffff;
	border: 10px solid white;
	margin: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: black;
	color: #ffffff;
	&#bottom-button {
		margin: 0;
		width: 140px;
		height: 50px;
		border: 3px solid white;
		border-radius: 80px;
		&:hover {
			border: 3px solid #bd83c1;
			cursor: pointer;
		}
	}
	&:hover {
		border-bottom: 10px solid #bd83c1;
		cursor: pointer;
	}
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const ScrollToTopContainer = styled.div`
	width: 100%;
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 7px;
`;

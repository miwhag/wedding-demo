/** @format */
import styled from 'styled-components';
export const AdditionalPageContainer = styled.div`
	margin: 8rem 1rem 0rem 1rem;
	.sub-heading {
		font-size: 18px;
		font-weight: 500;
		padding-bottom: 1.2rem;
	}
	@media only screen and (max-width: 900px) {
		margin: 5rem 1.2rem 1rem 1.2rem;
	}
`;

export const StepperContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4rem 0rem 6rem 0rem;
	gap: 20px;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		margin: 0;
		padding: 2rem 0rem 3rem 0rem;
		gap: 20px;
	}
`;

export const LineBreak = styled.div`
	height: 1px;
	background-color: whitesmoke;
	width: 100%;
	max-width: '800px';
	margin: 1rem 0rem;
`;

export const ContentContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	h1 {
		font-size: 20px;
		text-align: center;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Circular-Light';
		color: #343232;
	}
`;
export const SectionBreaks = styled.div`
	margin: 10px 0px;
	width: 100%;
	padding: 1rem 0rem;
	&.checkmark-section {
		padding: 0rem 0rem 1rem 0rem;
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

/** @format */
import React from 'react';
import styled from 'styled-components';

const StepBubble = styled.div<{ completed: boolean; currentStep: boolean }>`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: ${(p) =>
		p.completed || p.currentStep ? '#000000' : '#e2e2e2'};
	color: ${(p) => (p.completed || p.currentStep ? '#ffffff' : 'darkgray')};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
`;
const StepperContainer = styled.div`
	display: flex;
`;
const StepSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 55px;
	h1 {
		font-size: 12px;
		font-weight: 300;
	}
`;

const BarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 10px;
`;

const Bar = styled.div<{ completed: boolean; nextStep: boolean }>`
	height: 2px;
	width: 100%;
	border-radius: 1px;
	margin-top: -28px;
	background: ${(p) => (p.completed || p.nextStep ? '#000000' : 'lightgray')};
`;

const CheckMark = styled.div`
	display: inline-block;
	transform: rotate(40deg);
	height: 8px;
	width: 4px;
	border-bottom: 2px solid #ffffff;
	border-right: 2px solid #ffffff;
`;
export default function Stepper({ step }) {
	return (
		<StepperContainer>
			<StepSection>
				<StepBubble completed={step > 1} currentStep={step === 1}>
					{step > 1 ? <CheckMark /> : '1'}
				</StepBubble>
				<h1>Contact</h1>
			</StepSection>
			<BarContainer>
				<Bar completed={step > 2} nextStep={step === 2} />
			</BarContainer>
			<StepSection>
				<StepBubble completed={step > 2} currentStep={step === 2}>
					{step > 2 ? <CheckMark /> : '2'}
				</StepBubble>
				<h1>Cabin</h1>
			</StepSection>
			<BarContainer>
				<Bar completed={step > 3} nextStep={step === 3} />
			</BarContainer>
			<StepSection>
				<StepBubble completed={step > 3} currentStep={step === 3}>
					{step > 3 ? <CheckMark /> : '3'}
				</StepBubble>
				<h1>Other</h1>
			</StepSection>
		</StepperContainer>
	);
}

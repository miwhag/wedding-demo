/** @format */
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from './Button';

const Title = styled.div`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const ExitButton = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 20px 20px 0px 0px;
	font-size: 25px;
	svg {
		z-index: 10001;
		:hover {
			cursor: pointer;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-self: center;
	max-width: 320px;
	padding: 10px 15px;
	gap: 20px;
	@media only screen and (max-width: 900px) {
		margin: 0;
	}
`;

const ContentGroup = styled.div`
	margin: 0rem 1rem 2rem 1rem;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 900px) {
		margin: 0rem 3rem 2rem 3rem;
		flex-direction: row;
	}
`;

export default function Popup({
	content,
	handleExit = () => {},
	handleContinue = () => {},
	confirm = false,
}) {
	return (
		<div>
			<Dialog
				open={true}
				onClose={handleExit}
				aria-labelledby='responsive-dialog-title'
				scroll='body'
				maxWidth={'sm'}
			>
				<ExitButton>
					<GrClose onClick={handleExit} />
				</ExitButton>
				<DialogContent>
					<ContentGroup>
						<Title>
							<p dangerouslySetInnerHTML={content}></p>
							{confirm ? (
								<ButtonContainer>
									<Button onClick={handleExit} text='Ok' type='button' />
								</ButtonContainer>
							) : (
								<ButtonContainer>
									<Button onClick={handleContinue} text='Yes' type='button' />
									<Button onClick={handleExit} text='No' type='button' />
								</ButtonContainer>
							)}
						</Title>
					</ContentGroup>
				</DialogContent>
			</Dialog>
		</div>
	);
}

/** @format */
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import Button from './Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Title = styled.div`
	max-width: 700px;
	min-width: 300px;
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
	margin: 2rem auto;
	gap: 20px;
`;

const ContentGroup = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 900px) {
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
		<div style={{ minWidth: '300px' }}>
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
									<Button onClick={handleExit} text='Ok' />
								</ButtonContainer>
							) : (
								<ButtonContainer>
									<Button onClick={handleContinue} text='Yes' />
									<Button onClick={handleExit} text='No' />
								</ButtonContainer>
							)}
						</Title>
					</ContentGroup>
				</DialogContent>
			</Dialog>
		</div>
	);
}

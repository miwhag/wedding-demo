/** @format */
import styled from 'styled-components';

export default function ConfirmPage() {
	const ConfirmationPage = styled.div`
		margin-top: 4rem;
		max-width: 600px;
		min-height: 75vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0rem 2rem;
		p {
			max-width: 420px;
			text-align: center;
			font-family: 'Circular-Light';
		}
	`;

	const Title = styled.div`
		font-family: 'Circular-Book';
		text-transform: uppercase;
		font-size: 35px;
		text-align: center;
		margin: 0;
		padding: 0;
	`;
	return (
		<ConfirmationPage>
			<Title>
				Thank You <br />
				For Your RSVP
			</Title>
			<p>
				Expect to receive a confirmation email with details of your RSVP. You
				can also always come back to this RSVP portal (so long as the deadline
				has not passed), and update your rsvp as needed.
			</p>
		</ConfirmationPage>
	);
}

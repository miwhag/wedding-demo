/** @format */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Primary = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '100%',
	maxWidth: '200px',
	backgroundColor: '#242424',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Circular-Book',
	fontSize: '14px;',
	lineHeight: '20px',
	':hover': {
		backgroundColor: '#6D7DE9',
	},
}));

export default function PrimaryButton({ text, onClick }) {
	return (
		<Primary
			variant='contained'
			onClick={() => {
				window.scrollTo(0, 0);
				onClick();
			}}
		>
			{text}
		</Primary>
	);
}

/** @format */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const FullWidth = styled(Button)<ButtonProps>(({ theme }) => ({
	maxWidth: '500px',
	width: '100%',
	backgroundColor: '#242424',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Circular-Book',
	fontSize: '14px;',
	lineHeight: '20px',
	color: '#fff',
	':hover': {
		backgroundColor: '#5C6FEA',
		color: '#fff',
	},
	[theme.breakpoints.down('sm')]: {
		maxWidth: '300px',
	},
}));

export default function ButtonFullWidth({ text, onClick, disabled = false }) {
	return (
		<FullWidth
			disabled={disabled}
			variant='contained'
			onClick={() => {
				window.scrollTo(0, 0);
				onClick();
			}}
		>
			{text}
		</FullWidth>
	);
}

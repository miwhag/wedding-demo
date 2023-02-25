/** @format */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Small = styled(Button)<ButtonProps>(({ theme }) => ({
	minWidth: '60px',
	backgroundColor: '#242424',
	height: '40px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 30px',
	fontFamily: 'Circular-Book',
	fontSize: '13px;',
	lineHeight: '20px',
	marginRight: '10px',
	':hover': {
		backgroundColor: '#5C6FEA',
	},
}));

export default function SmallButton({ text, onClick }) {
	return (
		<Small
			variant='contained'
			onClick={() => {
				onClick();
			}}
		>
			{text}
		</Small>
	);
}

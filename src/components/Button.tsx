/** @format */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Loading from './Loading';

const Primary = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '100%',
	maxWidth: '220px',
	backgroundColor: '#242424',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Circular-Book',
	fontSize: '14px;',
	lineHeight: '20px',
	':hover': {
		backgroundColor: '#5C6FEA',
	},
}));

export default function PrimaryButton({
	text,
	onClick = () => {},
	type,
	id = '',
	loading = false,
}) {
	return (
		<Primary
			id={id}
			type={type}
			variant='contained'
			onClick={() => {
				onClick();
			}}
		>
			{loading ? <Loading /> : text}
		</Primary>
	);
}

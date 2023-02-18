/** @format */
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80vh;
`;

export default function Loading() {
	return (
		<LoadingContainer>
			<CircularProgress />
		</LoadingContainer>
	);
}

/** @format */
import styled from 'styled-components';

const Container = styled.div`
	padding-left: 1rem;
	max-width: 1100px;
	align-self: flex-start;
	span {
		font-family: 'Circular-Light';
		&.current {
			font-family: 'Circular-Book';
		}
	}
	&#our-story,
	&#schedule,
	&#faq {
		padding-left: unset;
	}

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export default function Breadcrumbs({ page, id }) {
	return (
		<Container id={id}>
			<span>home / </span>
			<span className='current'>{page}</span>
		</Container>
	);
}

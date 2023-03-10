/** @format */
import styled from 'styled-components';
import { Breadcrumbs } from '../components/index';

const RegistryPage = styled.div`
	width: 100%;
	max-width: 1100px;
	padding: 12rem 0rem 8rem 0rem;
	margin: auto;
	@media only screen and (max-width: 900px) {
		padding: 8rem 0rem 2rem 0rem;
	}
`;

const ImageContainer = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	img {
		width: 100%;
	}
	&.zola {
		max-width: 470px;
		padding-bottom: 4rem;
		cursor: pointer;
		@media only screen and (max-width: 900px) {
			max-width: 320px;
		}
	}
	&.venmo {
		cursor: pointer;
		background-color: #effaff;
		img {
			max-width: 200px;
		}
	}
`;

const RegistryContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 4rem;
	span {
		font-family: 'Circular-Medium';
	}
`;

const SubTitle = styled.div`
	font-family: 'Circular-Book';
	font-size: 30px;
	align-self: flex-start;
	margin: 1rem 0px 0rem 0px;
	padding: 0;
	@media only screen and (max-width: 900px) {
		font-size: 25px;
		text-align: start;
	}
`;

const SecondarySubTitle = styled.div`
	font-family: 'Circular-Book';
	font-size: 20px;
`;

const ItemContainer = styled.div`
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 250px;
	width: 250px;
	background-color: #1c1e12;
	color: white;
	position: relative;
`;

const ItemOverlay = styled.div`
	color: transparent;
	margin: 10px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 250px;
	width: 250px;
	p,
	button {
		opacity: 0;
	}
	:hover {
		color: white;
		background-color: #1c1e12;
		transition: background-color 0.2s ease;
		p {
			opacity: 1;
			margin: 0;
			padding: 0;
			transition: opacity 0.9s ease;
			transition: color 0.9s ease;
		}
		button {
			opacity: 1;
			margin-top: 20px;
			padding: 10px 20px;
			background-color: #01b4c0;
			border: 1px solid #01b4c0;
			border-radius: 1px;
			color: white;
			text-align: center;
			font-family: 'Circular-Book';
			cursor: pointer;
			transition: opacity 0.9s ease;
		}
		.title {
			font-family: 'Circular-Medium';
			font-size: 20px;
		}
		.description {
			font-family: 'Circular-Light';
		}
	}
`;

const Items = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const ViewRegistryButton = styled.button`
	padding: 15px 20px;
	min-width: 200px;
	background-color: #000;
	border: 1px solid #000;
	border-radius: 3px;
	color: #fff;
	margin-top: 10px;
	cursor: pointer;
`;

const Content = styled.div`
	padding: 1rem;
	@media only screen and (max-width: 900px) {
		padding: 0rem 1rem;
	}
`;
export default function Registry() {
	const registryItems = [
		{
			title: 'Weekend Lodging',
			image: 'https://i.postimg.cc/pLCyn18W/16.png',
			price: '$30',
			link: 'https://www.zola.com/registry/collection-item/63ec19c19b4186105d439b62',
			buttonText: 'BUY NOW',
		},
		{
			title: 'Sunday Breakfast',
			image: 'https://i.postimg.cc/k5h4T6fL/17.png',
			price: '$5',
			link: 'https://www.zola.com/registry/collection-item/63ec1a5effa20042b754d84d',
			buttonText: 'BUY NOW',
		},
		{
			title: 'Home Fund',
			image: 'https://i.postimg.cc/vmmT7LLW/18.png',
			price: 'Contribute what you wish',
			link: 'https://www.zola.com/registry/collection-item/63ec1e71dcbe2e5d9a39548b',
			buttonText: 'CONTRIBUTE',
		},
		{
			title: 'Honeymoon Fund',
			image: 'https://i.postimg.cc/JzMG0WsY/19.png',
			price: 'Contribute what you wish',
			link: 'https://www.zola.com/registry/collection-item/63ec23640d552d38445f0ef3',
			buttonText: 'CONTRIBUTE',
		},
	];

	return (
		<RegistryPage>
			<Breadcrumbs page='registry' id='registry' />
			<Content>
				<SubTitle>Zola.com</SubTitle>
				<SecondarySubTitle>Our Official Registry</SecondarySubTitle>
				<p>
					We are so excited to have you join our special day, and your presence
					at our wedding is the best gift we could ask for. However, if you feel
					inclined to give us a wedding gift, please take a look at our registry
					and the cash funds linked. After all these years together we have
					accumulated too many things really and mostly are focused on saving
					for a new home & a nice honeymoon ♡<br />
					<br />
					Also as you've probably read throughout the site, we are asking for
					$30 dollars per bed reserved for lodging for the weekend, and for a $5
					per person donation for Sunday's breakfast. You can make your payment
					for these items (if applicable) through our registry site directly or
					through the other listed platforms below.
				</p>
			</Content>
			<RegistryContainer>
				<ImageContainer
					className='zola'
					onClick={() =>
						window.open(
							'https://www.zola.com/registry/michaelandmiwha',
							'_blank'
						)
					}
				>
					<>
						<img
							src='https://i.postimg.cc/Jn98SbwH/Screen-Shot-2023-02-14-at-6-31-42-PM.png'
							alt='zola-title'
						/>
						<ViewRegistryButton>SEE OUR FULL REGISTRY</ViewRegistryButton>
					</>
				</ImageContainer>
				<Items>
					{registryItems.map((item) => {
						return (
							<ItemContainer>
								<ImageContainer>
									<img src={item.image} alt={item.title} />
								</ImageContainer>
								<ItemOverlay>
									<p className='title'>{item.title}</p>
									<p className='description'>{item.price}</p>
									<button onClick={() => window.open(item.link, '_blank')}>
										{item.buttonText}
									</button>
								</ItemOverlay>
							</ItemContainer>
						);
					})}
				</Items>
			</RegistryContainer>
			<div style={{ padding: '1rem' }}>
				<SubTitle>Other Options</SubTitle>
				<SecondarySubTitle>Venmo, Cash, or Check</SecondarySubTitle>
				<p>
					If you would like to avoid the $2 dollar Zola fee, but want to pay for
					lodging/breakfast or provide a gift, you can also venmo us directly,
					provide check or cash day of, or use whatever platform works best for
					you.
				</p>
				<SecondarySubTitle>Venmo Info</SecondarySubTitle>
				<p style={{ paddingBottom: 0, marginBottom: 0 }}>Username: Miwhag</p>
				<p style={{ padding: 0, margin: 0 }}>
					<span>View Link to Profile:</span>{' '}
					<span>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://account.venmo.com/u/miwhag'
						>
							Here
						</a>
					</span>
				</p>
			</div>
		</RegistryPage>
	);
}

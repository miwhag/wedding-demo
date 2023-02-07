/** @format */
import styled from 'styled-components';
import map from '../assets/distance-to.svg';
import { Breadcrumbs } from '../components/index';

const TravelPage = styled.div`
	width: 100%;
	max-width: 1100px;
	padding: 12rem 0rem 2rem 0rem;
	margin: auto;
	@media only screen and (max-width: 900px) {
		padding: 8rem 0rem 2rem 0rem;
	}
`;

const TravelImageContainer = styled.div`
	margin: auto;
	padding: 2rem 0rem;
	max-width: 600px;
	img {
		width: 100%;
	}
	@media only screen and (max-width: 900px) {
		margin: 0rem;
	}
`;

const TravelContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
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

const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 0px;
	a {
		padding-bottom: 7px;
		color: #6871e4;
	}
`;

export default function Travel() {
	return (
		<TravelPage>
			<Breadcrumbs page='travel' id='travel' />
			<TravelContainer>
				<SubTitle>Nearest Airport</SubTitle>
				<SecondarySubTitle>Denver International Airport</SecondarySubTitle>
				<SecondarySubTitle> 8500 Peña Blvd, Denver, CO 80249</SecondarySubTitle>
				<p>
					With no traffic, Deer Creek Mountain Camp is only 1 hour and 13
					minutes (67 miles away from DIA). This is the nearest major airport
					you'll want to fly into. There are also plenty of car rental options
					at the airport and shuttles that take you directly there. Just be
					aware that the traffic along I-70 can get pretty congested during peak
					commuter hours.
				</p>
				<p>
					<span>Note: </span>The venue is in the mountians, and as mountain life
					goes, you might not always have reliable cell service. To be on the
					safe side make sure you have the address typed into your GPS before
					reaching the mountains incase service drops.
				</p>
				<SubTitle>Venue</SubTitle>
				<SecondarySubTitle>Deer Creek Mountain Camp</SecondarySubTitle>
				<SecondarySubTitle>228 S Pine Dr, Bailey, CO 80421</SecondarySubTitle>
				<LinkContainer>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://deercreekmountaincamp.com/'
					>
						View Deer Creek Website Here
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.google.com/maps/place/Deer+Creek+Mountain+Camp/@39.446751,-105.4787151,17z/data=!3m1!4b1!4m5!3m4!1s0x876b0d94e94395c5:0xbec5eb8f416b5003!8m2!3d39.446751!4d-105.4765264'
					>
						Google Maps Directions
					</a>
				</LinkContainer>
				<p>
					Deer Creek Mountain Camp is located less than an hour away from
					Denver, and just a couple of miles off of US 285 near Bailey, at 9,000
					feet of elevation. Their incredible proximity to Denver International
					Airport makes them the perfect combination of mountain getaway with
					convenient access.
				</p>
				<SubTitle>Transportation</SubTitle>
				<p>
					While we don't have any formal transportation set up, we are happy to
					create a google doc that allows people to add their flight information
					to help aid in the coordination for carpooling. After you RSVP, you
					will recieve a link that allows you to add your information if you
					please. From there all coordination will need to be handled
					personally.
				</p>
				<TravelImageContainer>
					<img src={map} alt='' />
				</TravelImageContainer>
			</TravelContainer>
		</TravelPage>
	);
}

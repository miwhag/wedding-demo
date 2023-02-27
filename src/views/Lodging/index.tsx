/** @format */
import { Carousel, Breadcrumbs } from '../../components/index';
import airbnbIcon from '../../assets/airbnb-icon.svg';
import map from '../../assets/deer-creek.jpg';
import { airBnbLinks, imageArray } from './utils';
import {
	Section,
	LodgingContainer,
	ImageContainer,
	LodgingPage,
	ContentCenter,
	AdditionalButton,
	AdditionalContainer,
	Accent,
	ButtonContainer,
	AdditionalLodging,
	LodgeContainer,
	SubTitle,
} from './styled-components';

export default function Lodging() {
	return (
		<LodgingPage>
			<Breadcrumbs page='lodging' id='lodging' />
			<LodgingContainer>
				<SubTitle>On-site Cabins</SubTitle>
				<Section>
					<div className='section'>
						<p>
							We're so excited that this venue has lodging on site. It was
							another reason we loved the venue so much, and our preference is
							that guests who are staying for the weekend stay in a cabin. It
							will cost $30 per bed, which will cover the entire weekend (Friday
							and Saturday evening). While they have pretty nice beds they do
							not come with bedding. So, make sure you bring a sleeping bag and
							pillow with you.
							<br /> <br />
							Also please note that the on-site lodging is limited. There are
							over 100 beds at this venue, and there should be enough for
							everyone, however if space runs out you will need to find lodging
							offsite. So best to book early!
							<br /> <br />
							To reserve a spot, you will need to select your lodge when you
							RSVP. There are also 6 RV spots available if you happen to have an
							RV. Payment for a spot can be made on the registry site or through
							venmo. <br />
							<br />
						</p>
						<Carousel images={imageArray} />
					</div>
				</Section>
				<Accent />
				<ImageContainer id='map'>
					<img src={map} alt='' />
				</ImageContainer>
				<Section>
					<div className='section airbnb-block'>
						<SubTitle>Nearby Airbnbs</SubTitle>
						<p>
							We understand that cabins may not be everyone’s cup of tea and
							some might rather have their own accommodations. If that is the
							case, there are plenty of Airbnb options in Bailey and the
							surrounding towns. All of the towns below are less than 1.25 hours
							away with the closest being Bailey of course (5-10 minutes from
							venue) and Conifer (20-25 minutes from venue).
						</p>
						<ContentCenter>
							<AdditionalContainer>
								{airBnbLinks.map((bnb, index) => {
									return (
										<>
											<ButtonContainer
												key={` links ${index}`}
												onClick={() => window.open(bnb.href)}
											>
												<AdditionalButton>
													<div id='airbnb-button-content'>
														<img src={airbnbIcon} alt='' />
													</div>
													<span>{bnb.name}</span>
												</AdditionalButton>
											</ButtonContainer>
										</>
									);
								})}
							</AdditionalContainer>
						</ContentCenter>

						<AdditionalLodging>
							<SubTitle>Additional Lodging</SubTitle>
							<p>
								In addition to Airbnb, there are also are also two lodges in
								town recommended by the owners of the venue. Both are great
								places and have wonderful hosts. Also people with mobility
								issues will appreciate the ground level rooms of Bailey Lodge.
								<LodgeContainer>
									<div className='lodge'>
										<span className='bold'>Bailey Lodge</span>
										57920 US Hwy 285, Bailey, CO 80421
									</div>
									<div className='lodge'>
										<span className='bold'>Glenn Isle resort</span>
										573 Old Stagecoach Rd, Bailey, CO 80421
									</div>
								</LodgeContainer>
							</p>
						</AdditionalLodging>
					</div>
				</Section>
			</LodgingContainer>
		</LodgingPage>
	);
}

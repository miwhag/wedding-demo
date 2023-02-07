/** @format */
import { Breadcrumbs } from '../../components/index';
import {
	SchedulePage,
	ContentContainer,
	ScheduleSection,
	ImageContainer,
	SubTitle,
	SecondarySubTitle,
	AdditionalSubTitle,
	MobileDivider,
} from './styled-components';
export default function Schedule() {
	return (
		<>
			<SchedulePage>
				<div style={{ width: '100%', maxWidth: '1100px', display: 'flex' }}>
					<Breadcrumbs page='schedule' id='schedule' />
				</div>

				<ContentContainer id='weekend' eyebrowColor='#FF99FF' align='start'>
					<ImageContainer align='start'>
						<img src='https://iili.io/H0hacdX.png' alt='' />
					</ImageContainer>
					<ScheduleSection align='start'>
						<div className='eyebrow'>the weekend</div>
						<SubTitle className='padding-bottom' align='start'>
							Deer Creek Mountain Camp
						</SubTitle>
						<SubTitle align='start'>July 21-23, 2023</SubTitle>
						<SecondarySubTitle align='start' className='padding-top'>
							Friday 3:00pm - Sunday 10:00am
						</SecondarySubTitle>
						<AdditionalSubTitle align='start'>
							{' '}
							228 S Pine Dr, Bailey, CO 80421
						</AdditionalSubTitle>
						<p>
							One of the reasons we loved the venue so much was that we were
							able to book it for the entire weekend! In addition to that, there
							is lodging on site, meaning you can come for the entire weekend
							and don’t need to worry about driving to and from the venue and a
							potential airbnb/hotel. Please check the lodging page for more
							details.
						</p>
					</ScheduleSection>
				</ContentContainer>
				<MobileDivider />
				<ContentContainer id='dinner' eyebrowColor='#3366FF' align='end'>
					<ScheduleSection align='end'>
						<div className='eyebrow'>arrival dinner</div>
						<SubTitle align='end'>July 21, 2023</SubTitle>
						<SecondarySubTitle align='end'>Friday 6:00pm</SecondarySubTitle>
						<p>
							We know plenty of people will be traveling in on Friday and
							Saturday, and perhaps arriving at different times. We want to make
							sure that the people who arrive Friday can relax and enjoy dinner
							and so, we will be hosting a BBQ Friday evening with drinks before
							any evening games.
						</p>
					</ScheduleSection>
					<ImageContainer align='end'>
						<img src='https://iili.io/H0hxzMu.png' alt='' />
					</ImageContainer>
				</ContentContainer>
				<MobileDivider />
				<ContentContainer id='dodgeball' eyebrowColor='#C9E265' align='start'>
					<ImageContainer align='start'>
						<img src='https://iili.io/H0h1EaS.png' alt='' />
					</ImageContainer>
					<ScheduleSection align='start'>
						<div className='eyebrow'>The Dodgeball Tournament</div>
						<SubTitle align='start'>Friday July 21</SubTitle>
						<SecondarySubTitle align='start'>7:30pm</SecondarySubTitle>
						<p>
							If you know anything about us, it’s that we love a good friendly
							competition. But, even more when there are costumes involved!
							Event is aged 8+. You can opt in via your RSVP - participants will
							be assigned a team, and teams will be assigned a theme! <br />
							<br />
							And yes there will be a Purple Cobras team *clap* *clap* *hiss*
						</p>
					</ScheduleSection>
				</ContentContainer>
				<MobileDivider />
				<ContentContainer id='ceremony' eyebrowColor='#FF99FF' align='end'>
					<ScheduleSection align='end'>
						<div className='eyebrow'>The Ceremony</div>
						<SubTitle align='end'>Saturday July 22</SubTitle>
						<SecondarySubTitle align='end'>Starts at 3:30 pm</SecondarySubTitle>
						<p>
							The ceremony will take place outside among the beautiful aspens.
							Attire is festive-casual. Think bright colors, fun dresses or
							florals. At the end of the day though we also just want you to be
							comfortable. So wear what you like!
						</p>
					</ScheduleSection>
					<ImageContainer align='end'>
						<img src='https://iili.io/H0hal7n.png' alt='' />
					</ImageContainer>
				</ContentContainer>
				<MobileDivider />
				<ContentContainer id='reception' eyebrowColor='#3366FF' align='start'>
					<ImageContainer align='start'>
						<img src='https://iili.io/H0ha0es.png' alt='' />
					</ImageContainer>
					<ScheduleSection align='start'>
						<div className='eyebrow'>The Reception</div>
						<SubTitle align='start'>Following the Ceremony</SubTitle>
						<SecondarySubTitle align='start'>
							Get ready to boogie
						</SecondarySubTitle>
						<p>
							We can’t wait to celebrate with you! Cocktail hour, yard games,
							drinks, dinner and dancing will follow the ceremony!
						</p>
					</ScheduleSection>
				</ContentContainer>
			</SchedulePage>
		</>
	);
}

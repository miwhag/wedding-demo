/** @format */
import styled from 'styled-components';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';
import { Breadcrumbs } from '../components/index';

const OurStoryPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 12rem 1rem 0rem 1rem;
	@media only screen and (max-width: 900px) {
		padding-top: 8rem;
	}
`;

const ImageContainer = styled.div`
	max-width: 500px;
	display: block;
	max-height: 545px;
	&.miwha {
		margin-left: -2rem;
		img {
			width: 100%;
			margin-top: -450px;
			margin-left: 50px;
			border-radius: 5px;
			@media only screen and (max-width: 1000px) {
				margin-top: -306px;
				margin-left: 21px;
			}
		}
		&::before {
			content: '';
			height: 500px;
			width: 500px;
			background-color: #a9beff;
			display: block;
			position: relative;
			z-index: -1;
			border-radius: 5px;
			@media only screen and (max-width: 1000px) {
				height: 325px;
				width: 325px;
			}
		}
	}
	&.mike {
		margin-right: -2rem;
		img {
			width: 100%;
			margin-top: -450px;
			margin-left: -50px;
			border-radius: 5px;
			@media only screen and (max-width: 1000px) {
				margin-top: -306px;
				margin-left: -21px;
			}
		}
		&::before {
			content: '';
			height: 500px;
			width: 500px;
			background-color: #a9beff;
			display: block;
			position: relative;
			z-index: -1;
			border-radius: 5px;
			@media only screen and (max-width: 1000px) {
				height: 325px;
				width: 325px;
			}
		}
	}
	@media only screen and (max-width: 1000px) {
		max-width: 325px;
		padding-bottom: 2rem;
	}
`;

const ContentSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const AboutSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	max-width: 1100px;
	min-height: 660px;
	padding-bottom: 3rem;
	@media only screen and (max-width: 1000px) {
		margin: 1rem 0rem;
		flex-direction: column;
		&.accent {
			flex-direction: column-reverse;
		}
	}
`;

const Story = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	h1 {
		margin: 0;
		padding: 0rem 1rem 0rem 1rem;
		font-size: 21px;
		height: 31px;
		font-family: 'Circular-Book';
	}
	p {
		max-width: 450px;
		padding: 0rem 1rem;
	}
	&.content-left {
		margin-right: 6rem;
		@media only screen and (max-width: 1000px) {
			margin-right: 0;
		}
	}
	&.content-right {
		margin-left: 6rem;
		@media only screen and (max-width: 1000px) {
			margin-left: 0;
		}
	}
`;

const Background = styled.div`
	background-color: rgba(169, 190, 255, 0.17);
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4rem 0rem;
`;

const Title = styled.div`
	font-family: 'Circular-Book';
	font-size: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export default function OurStory() {
	return (
		<OurStoryPage>
			<div
				style={{
					width: '100%',
					maxWidth: '1100px',
					display: 'flex',
				}}
			>
				<Breadcrumbs page='our story' id='our-story' />
			</div>
			<ContentSection>
				<AboutSection>
					<ImageContainer className='miwha'>
						<img src={miwha} alt='' />
					</ImageContainer>
					<Story className='content-right'>
						<Title>Miwha's Side</Title>
						<p>
							Mike and I met in the summer of 2013, when he did a road trip with
							friends and stayed at my place along the way. We had many
							opportunities to meet prior to this since we had similar friends
							from a gap year program we did after high school on the east
							coast. Yet somehow our paths never crossed. The first time I saw
							him, he was wearing an oversized Hawaiian shirt with mismatched
							gym shorts, and very much looked like somebody who had spent the
							last week road tripping in the back of a Honda Civic. <br />
							<br />
							The long week road trip smell was no match to the connection we
							had, which was immediate. I was so excited to see Mike, and the
							next few days while he was in CO we were inseparable. He was
							sarcastic and hilarious and I couldn’t stop smiling after our
							interactions. I laughed so much when I was with him. From there we
							stayed in touch, just as friends. It wasn’t until I saw him again
							later in the summer that I realized just how important Mike was to
							me.
							<br />
							<br />A few months passed and I finally told him how I felt.
							Luckily at this point he felt the same way and the rest is history
						</p>
					</Story>
				</AboutSection>
				<Background>
					<AboutSection className='accent'>
						<Story className='content-left'>
							<Title>Michael's Side</Title>
							<p>
								The first time Miwha and I met, I was on a road trip with Aaron
								and Elliot Smith. We were planning to spend the night at Miwha’s
								family house in Colorado on our way from Pennsylvania to
								California. Miwha and I had known of each other from life as
								Moonies but had never really met. We were actually only staying
								with Miwha because of a mutual friend, Emily Cornier, who
								connected us when I reached out for a place to stay. I don't
								know why, but I just remember being really excited to meet
								Miwha. <br />
								<br />
								The Smiths and I were driving long hours from Indianapolis to
								get into Denver late at night, we were tired. I remember seeing
								her smiling face in the moonlight as I stepped out of the car
								that first night, I felt awake. I was really happy to be finally
								meeting her.
								<br /> <br />
								The next day we hung out as a group but it was like no one else
								existed. Years have past since then, but even now Miwha has a
								way of captivating me. I continue to find myself in awe of her
								strength, creativity, and beauty. Together we have built a life
								with laughter and joy and I am grateful to have her as my
								partner. I am glad you will be there to celebrate the start of
								our next chapter. Let’s Party!
							</p>
						</Story>
						<ImageContainer className='mike'>
							<img src={mike} alt='' />
						</ImageContainer>
					</AboutSection>
				</Background>
			</ContentSection>
		</OurStoryPage>
	);
}

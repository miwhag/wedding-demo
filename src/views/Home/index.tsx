/** @format */
import { useHistory } from 'react-router-dom';
import deerCreek from '../../assets/deer_creek.jpg';
import miwha from '../../assets/bailey_sign.jpg';
import { ContentBlock, Button, Countdown } from '../../components/index';
import {
	TitleContainer,
	Title,
	CountdownContainer,
	HomePage,
	HeroSection,
	StoryContainer,
} from './styled-components';

export default function Home({ visible }) {
	const history = useHistory();
	return (
		<HomePage visible={visible}>
			<HeroSection>
				<div className='copy-section'>
					<TitleContainer>
						<Title>we're getting married!</Title>
						<Button
							type='button'
							text='LEARN MORE'
							onClick={() => history.push('/schedule')}
						/>
					</TitleContainer>
				</div>
				<div className='image-section'>
					<img
						src='https://i.postimg.cc/PrJFXt4z/hero.png'
						alt=''
						className='desktop'
					/>
					<img
						src='https://i.postimg.cc/zvBpGjnX/mobile.png'
						alt=''
						className='mobile'
					/>
				</div>
			</HeroSection>
			<StoryContainer>
				<CountdownContainer>
					<Countdown />
				</CountdownContainer>
				<ContentBlock
					image={deerCreek}
					alt='deer creek'
					copy='july 21-23, 2023'
					backgroundColor='#E6F4FE'
					copyColor='#3366FF'
					imagePosition='right'
					type='copy'
					id='miwha'
				/>
				<ContentBlock
					image={miwha}
					alt='bailey sign'
					type='copy'
					copy='bailey,co'
					backgroundColor='#BD83C1'
					copyColor='#ffffff'
					imagePosition='left'
					id='mike'
				/>
			</StoryContainer>
		</HomePage>
	);
}

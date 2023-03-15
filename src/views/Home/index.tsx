/** @format */
import { useHistory } from 'react-router-dom';
import deerCreek500 from '../../assets/deer_creek_500.webp';
import deerCreek350 from '../../assets/deer_creek_350.webp';
import baileySign500 from '../../assets/bailey_sign_500.webp';
import baileySign350 from '../../assets/bailey_sign_350.webp';
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
					image={`${deerCreek350} 350w, ${deerCreek500} 500w`}
					defaultImage={deerCreek500}
					alt='deer creek'
					copy='july 21-23, 2023'
					backgroundColor='#E6F4FE'
					copyColor='#3366FF'
					imagePosition='right'
					type='copy'
					id='deerCreek'
				/>
				<ContentBlock
					image={`${baileySign350} 350w, ${baileySign500} 500w`}
					defaultImage={baileySign500}
					alt='bailey sign'
					type='copy'
					copy='bailey,co'
					backgroundColor='#BD83C1'
					copyColor='#ffffff'
					imagePosition='left'
					id='baileySign'
				/>
			</StoryContainer>
		</HomePage>
	);
}

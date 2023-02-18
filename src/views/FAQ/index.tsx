/** @format */
import { Accordian, Breadcrumbs } from '../../components/index';
import { Questions } from './utils/Questions';
import {
	Container,
	ScrollContainer,
	ButtonContainer,
	ScrollButton,
	Category,
	ScrollToTopContainer,
	SubTitle,
	Title,
	BreadcrumbsContainer,
} from './styled-components';

export default function FAQ() {
	const scrollToSection = (key) => {
		if (document !== null) {
			const yOffset = -200;
			const element = document.getElementById(key) as HTMLElement;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	return (
		<Container>
			<BreadcrumbsContainer>
				<Breadcrumbs page='faq' id='faq' />
			</BreadcrumbsContainer>
			<Title>
				<img src='https://i.postimg.cc/NF9V5pJp/diy-10.png' alt='title' />
			</Title>
			<ScrollContainer id='title'>
				{Object.keys(Questions).map((key) => (
					<ButtonContainer key={key}>
						<ScrollButton onClick={() => scrollToSection(key)}>
							{key}
						</ScrollButton>
					</ButtonContainer>
				))}
			</ScrollContainer>
			<Category>
				<SubTitle id='general'>General</SubTitle>
			</Category>
			<Accordian FAQ={Questions['general']} />
			<Category>
				<SubTitle id='lodging'>Lodging</SubTitle>
			</Category>
			<Accordian FAQ={Questions['lodging']} />
			<Category>
				<SubTitle id='rsvp'>RSVP</SubTitle>
			</Category>
			<Accordian FAQ={Questions['rsvp']} />
			<Category>
				<SubTitle id='weekend'>Weekend</SubTitle>
			</Category>
			<Accordian FAQ={Questions['weekend']} />
			<Category>
				<SubTitle id='wedding'>Wedding</SubTitle>
			</Category>
			<Accordian FAQ={Questions['wedding']} />
			<Category>
				<SubTitle id='other'>Other</SubTitle>
			</Category>
			<Accordian FAQ={Questions['other']} />
			<ScrollToTopContainer>
				<ScrollButton
					onClick={() => scrollToSection('title')}
					id='bottom-button'
				>
					scroll to top
				</ScrollButton>
			</ScrollToTopContainer>
		</Container>
	);
}

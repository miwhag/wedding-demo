/** @format */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import {
	MainNav,
	MobileMenu,
	LinkContainer,
	GroupedLinks,
	Title,
	MenuLink,
	NavAccent,
	HamburgerContainer,
} from './styled-components';
import ButtonSmall from '../ButtonSmall';

export default function Navbar({ setFlyoutVisible, flyoutVisible }) {
	const history = useHistory();
	let location = useLocation();

	//Nav Heading Visible State
	const [scrollVisible, setScrollVisible] = useState(true);

	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<MainNav
			scrollVisible={scrollVisible}
			flyoutVisible={flyoutVisible}
			id='main-nav'
		>
			<MobileMenu>
				<div className='flex'>
					<HamburgerContainer onClick={() => setFlyoutVisible(!flyoutVisible)}>
						<div className='bar' />
						<div className='bar' /> <div className='bar' />
						<div className='bar' />
					</HamburgerContainer>
					<Title onClick={() => history.push('/')}>M + M</Title>
					<ButtonSmall text='RSVP' onClick={() => history.push('/rsvp')} />
				</div>
			</MobileMenu>
			<LinkContainer>
				<Title onClick={() => history.push('/')}>M + M</Title>
				<GroupedLinks>
					<MenuLink
						onClick={() => handleClick()}
						active={location.pathname.includes('our-story')}
					>
						<Link to='/our-story'>our story</Link>
					</MenuLink>
					<MenuLink
						onClick={() => handleClick()}
						active={location.pathname.includes('schedule')}
					>
						<Link to='/schedule'>schedule</Link>
					</MenuLink>
					<MenuLink
						onClick={() => handleClick()}
						active={location.pathname.includes('lodging')}
					>
						<Link to='/lodging'>lodging</Link>
					</MenuLink>
					<MenuLink
						onClick={() => handleClick()}
						active={location.pathname.includes('travel')}
					>
						<Link to='/travel'>travel</Link>
					</MenuLink>
					<MenuLink
						onClick={() => handleClick()}
						active={location.pathname.includes('registry')}
					>
						<Link to='/registry'>registry</Link>
					</MenuLink>
					<MenuLink
						onClick={() => handleClick()}
						active={location.pathname.includes('faq')}
					>
						<Link to='/faq'>faq</Link>
					</MenuLink>

					<MenuLink className='desktop'>
						<ButtonSmall text='RSVP' onClick={() => history.push('/rsvp')} />
					</MenuLink>
				</GroupedLinks>
			</LinkContainer>
			<NavAccent />
		</MainNav>
	);
}

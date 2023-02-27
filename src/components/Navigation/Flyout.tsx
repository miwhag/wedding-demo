/** @format */
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';

import {
	FlyoutMobileMenu,
	FlyoutMenuLink,
	FlyoutLinkContainer,
	FlyoutExitButton,
} from './styled-components/index';
import { Link } from 'react-router-dom';

export default function Flyout({ flyoutVisible, setFlyoutVisible }) {
	const [active, setActive] = useState('home');

	const handleMenuClick = (path) => {
		setActive(path);
		setFlyoutVisible(false);
		window.scrollTo(0, 0);
	};
	return (
		<FlyoutMobileMenu visible={flyoutVisible}>
			<FlyoutExitButton>
				<GrClose onClick={() => setFlyoutVisible(false)} />
			</FlyoutExitButton>
			<FlyoutLinkContainer>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('home')}
					active={active === 'home'}
				>
					<Link to='/'>
						<p>home</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('our-story')}
					active={active === 'our-story'}
				>
					<Link to='/our-story'>
						<p>our story</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('schedule')}
					active={active === 'schedule'}
				>
					<Link to='/schedule'>
						<p>schedule</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('lodging')}
					active={active === 'lodging'}
				>
					<Link to='/lodging'>
						<p>lodging</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('travel')}
					active={active === 'travel'}
				>
					<Link to='/travel'>
						<p>travel</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('registry')}
					active={active === 'registry'}
				>
					<Link to='/registry'>
						<p>registry</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('faq')}
					active={active === 'faq'}
				>
					<Link to='/faq'>
						<p>faq</p>
					</Link>
				</FlyoutMenuLink>
				<FlyoutMenuLink
					onClick={() => handleMenuClick('rsvp')}
					active={active === 'rsvp'}
				>
					<Link to='/rsvp'>
						<p>rsvp</p>
					</Link>
				</FlyoutMenuLink>
			</FlyoutLinkContainer>
		</FlyoutMobileMenu>
	);
}

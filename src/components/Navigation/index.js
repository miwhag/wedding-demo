/** @format */
import { Switch, Route } from 'react-router-dom';
import {
	Home,
	RSVP,
	Schedule,
	Registry,
	Lodging,
	FAQ,
	OurStory,
	Travel,
} from '../../views/index';

export default function Navigation() {
	return (
		<Switch>
			<Route path='/our-story'>
				<OurStory />
			</Route>
			<Route path='/schedule'>
				<Schedule />
			</Route>
			<Route path='/rsvp'>
				<RSVP />
			</Route>
			<Route path='/registry'>
				<Registry />
			</Route>
			<Route path='/lodging'>
				<Lodging />
			</Route>
			<Route path='/travel'>
				<Travel />
			</Route>
			<Route path='/faq'>
				<FAQ />
			</Route>
			<Route path='/'>
				<Home />
			</Route>
		</Switch>
	);
}

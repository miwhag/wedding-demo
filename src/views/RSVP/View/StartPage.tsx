/** @format */
import { useEffect, useState, useContext, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { GuestContext } from '../../../context/GuestContext';
import {
	Heading,
	ButtonContainer,
	ErrorMessage,
	StartPageContainer,
	Title,
	SubTitle,
} from '../styled-components';
import { Button, Loading } from '../../../components/index';
import { getGuests, getSelectedGuest } from '../Model';

export default function StartPage({ progressFlow }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [displayError, setDisplayError] = useState(false);
	const [loaded, setLoaded] = useState(true);
	const [guestList, setGuestList] = useState<any>([]);
	const { setGuest } = useContext<any>(GuestContext);

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			let guestResult = await getGuests();
			setGuestList(guestResult);
		})();
		return () => controller?.abort();
	}, []);

	const keyPress = useCallback((e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			let button = document?.getElementById('submit-button');
			button?.click();
		}
	}, []);

	useEffect(() => {
		let input = document?.getElementById('name-input');
		input?.addEventListener('keyup', keyPress);
		return () => document.removeEventListener('keyup', keyPress);
	}, [keyPress, searchTerm]);

	function editSearchTerm(e) {
		let term = e.target.value.trim().toLowerCase();
		let encoded = Buffer.from(term).toString('base64');
		setSearchTerm(encoded);
	}

	async function getSelectedGuestInfo() {
		let foundGuest = guestList?.find((guest) =>
			searchTerm?.includes(guest?.name)
		);
		if (!!foundGuest) {
			let promise = new Promise((resolve) => {
				resolve(getSelectedGuest(foundGuest?.guest_id));
			});
			let result = await promise;
			setGuest(result);
			return result;
		}
	}

	function handleClick() {
		setLoaded(false);
		getSelectedGuestInfo().then(function (result) {
			if (!!result) {
				progressFlow();
				setDisplayError(false);
				setLoaded(true);
			} else {
				setDisplayError(true);
				setLoaded(true);
			}
		});
	}

	return (
		<>
			{loaded ? (
				<StartPageContainer>
					<>
						<Heading>
							<Title>RSVP</Title>
							<SubTitle>
								Enter your <span className='bold'>full name </span>below to find
								your invitation
							</SubTitle>
						</Heading>
						<TextField
							id='name-input'
							label='Search Your Full Name'
							onChange={(e) => editSearchTerm(e)}
							type='text'
							required
							error={displayError}
							fullWidth
							sx={{ maxWidth: '300px' }}
						/>
						{displayError && (
							<ErrorMessage>
								Oh no! We’re having trouble finding your invite. Make sure the
								spelling is correct and that your search includes your first and
								last name. If the problem persists contact m+m at
								mikemiwha@gmail.com
							</ErrorMessage>
						)}
						<ButtonContainer>
							<Button
								id='submit-button'
								type='button'
								onClick={() => handleClick()}
								text='Find My Invite'
							/>
						</ButtonContainer>
					</>
				</StartPageContainer>
			) : (
				<Loading />
			)}
		</>
	);
}

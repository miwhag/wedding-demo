/** @format */
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import {
	Heading,
	ButtonContainer,
	ErrorMessage,
	StartPageContainer,
	Title,
	SubTitle,
} from '../styled-components';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import { getGuests, getSelectedGuest } from '../Model';
import TextField from '@mui/material/TextField';
import { GuestContext } from '../../../context/GuestContext';

export default function StartPage({ progressFlow }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [displayError, setDisplayError] = useState(false);
	const [loaded, setLoaded] = useState(true);
	const [guestList, setGuestList] = useState<any>([]);
	const { setGuest } = useContext<any>(GuestContext);

	const hideRsvp = window.location.search === '?beta' ? false : true;

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			let guestResult = await getGuests();
			setGuestList(guestResult);
		})();
		return () => controller?.abort();
	}, []);

	function editSearchTerm(e) {
		let term = e.target.value.trim().toLowerCase();
		setSearchTerm(term);
	}

	async function getSelectedGuestInfo() {
		let foundGuest = guestList?.find((guest) =>
			searchTerm?.includes(guest?.name?.toLowerCase())
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
					{hideRsvp ? (
						<Title>
							Hang tight! <br />
							RSVP is opening up soon
						</Title>
					) : (
						<>
							<Heading>
								<Title>RSVP</Title>
								<SubTitle>
									Enter your <span className='bold'>full name </span>below to
									find your invitation
								</SubTitle>
							</Heading>
							<TextField
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
									spelling is correct and that your search includes your first
									and last name. If the problem persists contact m+m at
									mikemiwha@gmail.com
								</ErrorMessage>
							)}
							<ButtonContainer>
								<Button
									type='button'
									onClick={() => handleClick()}
									text='Find My Invite'
								/>
							</ButtonContainer>
						</>
					)}
				</StartPageContainer>
			) : (
				<Loading />
			)}
		</>
	);
}

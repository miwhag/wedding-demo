/** @format */

import { useEffect, useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import {
	Stepper,
	ButtonSecondary,
	Loading,
	Button,
} from '../../../../components/index';
import { getFormValues } from './utils';
import { GuestContext } from '../../../../context/GuestContext';
import {
	getSelectedGuest,
	updateDodgeball,
	updateGuest,
	sendGuestEmail,
} from '../../Model';
import {
	ButtonContainer,
	AdditionalPageContainer,
	StepperContainer,
	ContentContainer,
	SectionBreaks,
	LineBreak,
	CheckboxContainer,
} from './styled-components';

export default function AdditionalPage({ regressFlow, progressFlow }) {
	const { guest, setGuest } = useContext<any>(GuestContext);
	const [breakfast, setBreakfast] = useState('');
	const [arrivalDate, setArrivalDate] = useState('');
	const [arrivalDropdownError, setArrivalDropdownError] = useState(false);
	const [playingDodgeball, setPlayingDodgeball] = useState<any>([]);
	const [notPlayingDodgeball, setNotPlayingDodgeball] = useState<any>([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			let current = await getSelectedGuest(guest.id);
			setGuest(current);
			setCurrentState(current);
			setLoaded(true);
		})();
		return () => controller?.abort();
	}, []);

	const setCurrentState = (current) => {
		let kids = current?.kids.filter((kid) => kid.team_id === 1);
		let kidsNotPlaying = current?.kids.filter((kid) => kid.team_id === null);

		let kidsPlayingDodgeball = kids.map((kid) => kid.name);
		let kidsNotPlayingDodgeball = kidsNotPlaying.map((kid) => kid.name);

		let plusOnePlayingDodgeball =
			current?.plus_ones[0]?.team_id === 1 ? current?.plus_ones[0]?.name : '';

		let plusOneNotPlayingDodgeball =
			current?.plus_ones[0]?.team_id === 0 ? current?.plus_ones[0]?.name : '';

		let guestPlayingDodgeball =
			current?.team_id === 1 ? current?.full_name : '';

		let guestNotPlayingDodgeball =
			current?.team_id === 0 ? current?.full_name : '';

		let playing = [
			...kidsPlayingDodgeball,
			plusOnePlayingDodgeball,
			guestPlayingDodgeball,
		].filter((name) => name !== '');

		let notPlaying = [
			...kidsNotPlayingDodgeball,
			plusOneNotPlayingDodgeball,
			guestNotPlayingDodgeball,
		].filter((name) => name !== '');

		setPlayingDodgeball(playing);
		setNotPlayingDodgeball(notPlaying);
		setArrivalDate(current.arrival_date);
		setBreakfast(current.breakfast);
	};

	const handleArrivalChange = (event: SelectChangeEvent) => {
		setArrivalDate(event.target.value as string);
	};

	const handleBreakfastChange = (event: SelectChangeEvent) => {
		setBreakfast(event.target.value);
	};

	const checkForErrors = () => {
		setArrivalDropdownError(false);
		if (arrivalDate === '') {
			setArrivalDropdownError(true);
		}
		if (arrivalDate === '') return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let error = checkForErrors();
		if (!error) {
			let formValues = getFormValues();
			updateGuest(guest.id, {
				...formValues,
				arrival_date: arrivalDate,
				breakfast: breakfast ? breakfast : 'no',
			});
			if (playingDodgeball) {
				updateDodgeball({ yes: playingDodgeball, no: notPlayingDodgeball });
			}
			progressFlow();
			sendGuestEmail(guest.id);
			window.scrollTo(0, 0);
		}
	};

	const getPartyList = () => {
		if (guest) {
			let guestsOverSeventeen;

			let plusOne = guest?.plus_ones[0]?.name;

			let children = guest?.kids;
			let childrenEligible = children?.filter((child) => child?.age >= 8);
			let childNames = childrenEligible?.map((child) => child?.name);

			if (plusOne === undefined || plusOne === '') {
				guestsOverSeventeen = [...childNames, guest.full_name];
			} else {
				guestsOverSeventeen = [plusOne, ...childNames, guest.full_name];
			}
			return guestsOverSeventeen;
		} else {
			return [];
		}
	};

	const handleCheckmarks = (e) => {
		let player = e.target.name;

		if (playingDodgeball.includes(player)) {
			let result = playingDodgeball.filter((guest) => guest !== player);
			setPlayingDodgeball(result);
			setNotPlayingDodgeball([...notPlayingDodgeball, player]);
		} else {
			let result = notPlayingDodgeball.filter((guest) => guest !== player);
			setNotPlayingDodgeball(result);
			setPlayingDodgeball([...playingDodgeball, player]);
		}
	};

	return (
		<>
			{loaded ? (
				<AdditionalPageContainer>
					<StepperContainer>
						<Stepper step={4} />
					</StepperContainer>
					<ContentContainer>
						<SectionBreaks>
							<div className='sub-heading'>
								Important Information About Meals
							</div>
							<p className='description'>
								We will provide dinner on Friday evening (think grilling / bbq),
								coffee & donuts on Saturday morning, dinner Saturday evening
								(Reception Dinner), and breakfast on Sunday Morning. For
								Saturday lunch we recommend guests hit the town in Bailey or
								Conifer for a meal, though we will also have some simple food
								out for people to enjoy incase they are unable to get to town.
								Think PBJ's. <br />
								<br />
								For Sunday breakfast we are asking for a $5 dollar donation.
								However if you do not want breakfast you can opt out below as
								well.
							</p>
						</SectionBreaks>
						<form noValidate autoComplete='off' onSubmit={handleSubmit}>
							<SectionBreaks>
								<div className='sub-heading'>
									Do you or anyone in your party have any food allergies that we
									should be aware of?
								</div>
								<p>If yes, please describe below otherwise leave blank</p>
								<TextField
									id='allergy-text-feild'
									sx={{ maxWidth: 400, width: '100%' }}
									label='Any Allergies?'
									multiline
									maxRows={4}
									defaultValue={guest?.diet ?? ''}
								/>
							</SectionBreaks>
							<SectionBreaks>
								<div className='sub-heading'>
									Do you and your party want breakfast on Sunday morning?
								</div>
								<FormControl
									sx={{ m: 1, maxWidth: 200, margin: 0, width: '100%' }}
								>
									<InputLabel id='breakfast-label'>Please select</InputLabel>
									<Select
										labelId='breakfast-label'
										label='Please Select'
										onChange={handleBreakfastChange}
										defaultValue={guest?.breakfast ?? ''}
										required
									>
										<MenuItem value={'yes'}>Yes</MenuItem>
										<MenuItem value={'no'}>No</MenuItem>
									</Select>
								</FormControl>
							</SectionBreaks>
							<LineBreak />
							<SectionBreaks>
								<div className='sub-heading'>
									What day will you be arriving?
								</div>
								<FormControl
									sx={{ m: 1, maxWidth: 260, margin: 0, width: '100%' }}
									error={arrivalDropdownError}
									required
								>
									<InputLabel id='day-label'>Select a day</InputLabel>
									<Select
										labelId='day-label'
										label='Select a day'
										onChange={handleArrivalChange}
										defaultValue={guest?.arrival_date ?? ''}
									>
										<MenuItem value={'friday'}>Friday</MenuItem>
										<MenuItem value={'saturday'}>Saturday</MenuItem>
									</Select>
									{arrivalDropdownError && (
										<FormHelperText>Please select an option</FormHelperText>
									)}
								</FormControl>
							</SectionBreaks>
							<SectionBreaks className='dodgeball-section'>
								<div className='sub-heading'>Playing Dodgeball?</div>
								<p>
									The dodgeball tournament will be held on Friday evening and is
									for anyone 8 years and older. Also there is a section of the
									gym that overlooks the court and those who are interested in
									hanging out but not playing can still participate by watching
									and cheering for a team.
								</p>
							</SectionBreaks>
							<SectionBreaks className='checkmark-section'>
								<div className='sub-heading'>
									Select those who wish to participate
								</div>
								{getPartyList()?.map((guest, index) => {
									return (
										<CheckboxContainer key={`checkbox-${index}`}>
											<Checkbox
												defaultChecked={playingDodgeball.includes(guest)}
												onChange={handleCheckmarks}
												inputProps={{ name: guest }}
											/>
											{guest}
										</CheckboxContainer>
									);
								})}
							</SectionBreaks>
							<SectionBreaks>
								<div className='sub-heading'>Any comments or questions?</div>
								<TextField
									sx={{ maxWidth: 700, width: '100%' }}
									id='questions-comments'
									label='Comments or Questions'
									multiline
									maxRows={4}
									defaultValue={guest.comments ?? ''}
								/>
							</SectionBreaks>
							<ButtonContainer>
								<ButtonSecondary onClick={() => regressFlow()} text='Back' />
								<Button type='submit' text='Submit My RSVP' />
							</ButtonContainer>
						</form>
					</ContentContainer>
				</AdditionalPageContainer>
			) : (
				<Loading />
			)}
		</>
	);
}

/** @format */
import { useEffect, useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import {
	Stepper,
	ButtonSecondary,
	Loading,
	Button,
} from '../../../../components/index';
import { GuestContext } from '../../../../context/GuestContext';
import {
	getSelectedGuest,
	updateDodgeball,
	updateGuest,
	sendGuestEmail,
} from '../../Model';
import { getFormValues } from './utils';
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
	const [playingDodgeball, setPlayingDodgeball] = useState<any>([]);
	const [notPlayingDodgeball, setNotPlayingDodgeball] = useState<any>([]);
	const [arrivalError, setArrivalError] = useState(false);
	const [breakfastError, setBreakfastError] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		let controller = new AbortController();
		handleLoad();
		return () => controller?.abort();
	}, []);

	async function handleLoad() {
		let currentGuest = await getSelectedGuest(guest?.id);
		setCurrentState(currentGuest);
		setLoaded(true);
	}

	const setCurrentState = (current) => {
		setGuest(current);

		let kids = current?.kids.filter((kid) => kid.team_id === 1);
		let kidsNotPlaying = current?.kids.filter(
			(kid) => kid.team_id === 0 || kid.team_id === null
		);

		let kidsPlayingDodgeball = kids?.map((child) => {
			return { name: child?.name, id: child?.id, type: 'kid' };
		});

		let kidsNotPlayingDodgeball = kidsNotPlaying?.map((child) => {
			return { name: child?.name, id: child?.id, type: 'kid' };
		});

		let plusOnePlayingDodgeball = current?.plus_ones[0]?.team_id === 1 && {
			name: current?.plus_ones[0]?.name,
			id: current?.plus_ones[0]?.id,
			type: 'plus_one',
		};

		let plusOneNotPlayingDodgeball =
			current?.plus_ones[0]?.team_id === 0 ||
			(current?.plus_ones[0]?.team_id === null && {
				name: current?.plus_ones[0]?.name,
				id: current?.plus_ones[0]?.id,
				type: 'plus_one',
			});

		let guestPlayingDodgeball = current?.team_id === 1 && {
			name: current?.full_name,
			id: current?.id,
			type: 'guest',
		};

		let guestNotPlayingDodgeball =
			current?.team_id === 0 ||
			(current?.team_id === null && {
				name: current?.full_name,
				id: current?.id,
				type: 'guest',
			});

		let playing = [
			...kidsPlayingDodgeball,
			plusOnePlayingDodgeball,
			guestPlayingDodgeball,
		].filter((guest) => guest !== false);

		let notPlaying = [
			...kidsNotPlayingDodgeball,
			plusOneNotPlayingDodgeball,
			guestNotPlayingDodgeball,
		].filter((guest) => guest !== false);

		setPlayingDodgeball(playing);
		setNotPlayingDodgeball(notPlaying);
		setArrivalDate(current.arrival_date);
		setBreakfast(current.breakfast);
	};

	const handleArrivalChange = (event) => {
		setArrivalDate(event.target.value);
	};

	const handleBreakfastChange = (event) => {
		setBreakfast(event.target.value);
	};

	const checkForErrors = () => {
		setArrivalError(false);
		if (arrivalDate === '' || arrivalDate === null) {
			setArrivalError(true);
		}
		if (breakfast === '' || breakfast === null) {
			setBreakfastError(true);
		}
		if (
			arrivalDate === '' ||
			arrivalDate === null ||
			breakfast === '' ||
			breakfast === null
		) {
			return true;
		} else {
			return false;
		}
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

			let transformedGuest = guest && {
				name: guest?.full_name,
				id: guest?.id,
				type: 'guest',
			};
			let plusOne = guest?.plus_ones[0] && {
				name: guest?.plus_ones[0]?.name,
				id: guest?.plus_ones[0]?.id,
				type: 'plus_one',
			};

			let children = guest?.kids;
			let childrenEligible = children?.filter((child) => child?.age >= 8);
			let childNames = childrenEligible?.map((child) => {
				return { name: child?.name, id: child?.id, type: 'kid' };
			});

			if (plusOne === undefined || plusOne === '') {
				guestsOverSeventeen = [...childNames, transformedGuest];
			} else {
				guestsOverSeventeen = [plusOne, ...childNames, transformedGuest];
			}
			return guestsOverSeventeen;
		} else {
			return [];
		}
	};

	const handleCheckmarks = (person) => {
		if (playingDodgeball.find((player) => player.id === person.id)) {
			let result = playingDodgeball.filter((player) => player.id !== person.id);
			setPlayingDodgeball(result);
			setNotPlayingDodgeball([...notPlayingDodgeball, person]);
		} else {
			let result = notPlayingDodgeball.filter(
				(player) => player.id !== person.id
			);
			setPlayingDodgeball([...playingDodgeball, person]);
			setNotPlayingDodgeball(result);
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
								well. As a reminder, information about payments can be found on
								the registry page.
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
									sx={{ maxWidth: 350, width: '100%' }}
									label='Any Allergies?'
									multiline
									maxRows={2}
									defaultValue={guest?.diet ?? ''}
								/>
							</SectionBreaks>
							<SectionBreaks>
								<div className='sub-heading'>
									Do you and your party want breakfast on Sunday morning?
								</div>
								<FormControl
									sx={{ m: 1, maxWidth: 200, margin: 0, width: '100%' }}
									error={breakfastError}
									required
								>
									<InputLabel id='breakfast-label'>Please select</InputLabel>
									<Select
										labelId='breakfast-label'
										label='Please Select'
										onChange={handleBreakfastChange}
										defaultValue={guest?.breakfast ?? ''}
									>
										<MenuItem value={'yes'}>Yes</MenuItem>
										<MenuItem value={'no'}>No</MenuItem>
									</Select>
									{breakfastError && (
										<FormHelperText>Please select an option</FormHelperText>
									)}
								</FormControl>
							</SectionBreaks>
							<LineBreak />
							<SectionBreaks>
								<div className='sub-heading'>
									What day will you be arriving?
								</div>
								<FormControl
									sx={{ m: 1, maxWidth: 200, margin: 0, width: '100%' }}
									error={arrivalError}
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
									{arrivalError && (
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
								{getPartyList()?.map((person, index) => {
									return (
										<CheckboxContainer key={`checkbox-${index}`}>
											<Checkbox
												defaultChecked={playingDodgeball.find(
													(player) => player.id === person.id
												)}
												onChange={(e) => handleCheckmarks(person)}
												inputProps={{ name: person.name }}
											/>
											{person.name}
										</CheckboxContainer>
									);
								})}
							</SectionBreaks>
							<SectionBreaks>
								<div className='sub-heading'>Any comments or questions?</div>
								<TextField
									sx={{ maxWidth: 450, width: '100%' }}
									id='questions-comments'
									label='Comments or Questions'
									multiline
									rows={3}
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

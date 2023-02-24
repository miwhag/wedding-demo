/** @format */
import { useEffect, useState, useContext } from 'react';
import { FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { GuestContext } from '../../../../context/GuestContext';
import { Confirmation, Stepper, Toggle } from '../../../../components/index';
import {
	Card,
	ButtonSecondary,
	Button,
	Popup,
	Loading,
} from '../../../../components/index';
import {
	CabinInfoSection,
	CabinCardsContainer,
	ButtonContainer,
	ToggleContainer,
	CabinListContainer,
	SelectedCabinContainer,
	SelectedCabinSection,
	ImageContainer,
	LinkContainer,
	ViewMoreLink,
	SelectedContent,
	DeselectButton,
	ArrowContainer,
	ViewMoreButton,
	ErrorMessage,
	Offsite,
	Heading,
	SubHeading,
	OffsiteContainer,
} from './styled-components';

import { updateGuest, getLodgings, getSelectedGuest } from '../../Model';

export default function CabinPage({ regressFlow, progressFlow }) {
	const {
		guest,
		setGuest,
		partyUpdated,
		selectedCabin,
		setSelectedCabin,
		cabinList,
		setCabinList,
	} = useContext<any>(GuestContext);
	const [loaded, setLoaded] = useState(false);
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState(null);
	const [noLodgingNotice, setNoLodgingNotice] = useState(false);
	const [displayDeclineLodgingModal, setDisplayDeclineLodgingModal] =
		useState(false);
	const [hideCabins, setHideCabins] = useState(false);
	const [capacityError, setCapacityError] = useState(false);

	const offsiteCabin = selectedCabin?.id === 24;
	const preSelectedCabin =
		selectedCabin?.lodging_type === 'apartment' ||
		selectedCabin?.name === 'Sasquach' ||
		selectedCabin?.name === 'Arapahoe';

	const [acceptLodging, setAcceptLodging] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		let controller = new AbortController();
		window.scrollTo(0, 0);
		handleLoad();
		return () => controller?.abort();
	}, []);

	useEffect(() => {
		var body = document.body;
		if (activeModal) {
			setOpen(true);
			body.classList.add('modal-open');
		} else {
			setOpen(false);
			body.classList.remove('modal-open');
		}
	}, [activeModal]);

	useEffect(() => {
		let controller = new AbortController();
		if (loaded) {
			updateCabinList();
			updateGuestInfo();
		}
		return () => controller?.abort();
	}, [selectedCabin]);

	async function handleLoad() {
		let cabins = await getLodgings();

		setCurrentState(cabins);
		setLoaded(true);
	}

	function setCurrentState(cabinList) {
		updateGuestInfo();
		setCabinList(cabinList);
		let cabin = cabinList.find((cabin) => cabin?.id === guest?.lodging_id);
		if (cabin && cabin.id !== 24) {
			setHideCabins(true);
			setAcceptLodging(true);
			setSelectedCabin(cabin);
			setActiveCard(cabin);
		} else {
			setAcceptLodging(false);
			setSelectedCabin(cabin);
		}
	}

	async function updateCabinList() {
		let lodgingResult = await getLodgings();
		setCabinList(lodgingResult);
	}

	async function updateGuestInfo() {
		let response = await getSelectedGuest(guest.id);
		setGuest(response);
		checkPartyCapacity(response);
	}

	const handleCardClick = (cabin) => {
		setActiveModal(true);
		setActiveCard(cabin);
		setOpen(true);
	};

	const handleDeclineLodging = () => {
		updateGuest(guest?.id, { lodging_id: 24 });
		progressFlow();
	};
	//offsite is cabin id 24
	const handleContinue = () => {
		if (capacityError) {
			document?.getElementById('error-anchor')?.scrollIntoView({
				behavior: 'smooth',
			});
		} else if (
			(selectedCabin === null && acceptLodging) ||
			(selectedCabin?.id === 24 && acceptLodging)
		) {
			setNoLodgingNotice(true);
		} else if (selectedCabin && !acceptLodging) {
			updateGuest(guest?.id, { lodging_id: 24 });
			progressFlow();
			window.scrollTo(0, 0);
		} else if (partyUpdated) {
			updateGuest(guest?.id, { lodging_id: selectedCabin?.id });
			progressFlow();
			window.scrollTo(0, 0);
		} else if (selectedCabin && acceptLodging && !partyUpdated) {
			progressFlow();
		} else {
			setDisplayDeclineLodgingModal(true);
		}
	};

	const checkPartyCapacity = (current) => {
		const guestIsAssignedLodging = current?.lodging_id !== null;
		const plusOneIsNotAssignedLodging =
			current?.plus_ones[0]?.lodging_id === null;
		const kidIsNotAssignedLodging = current?.kids?.some(
			(kid) => kid?.lodging_id === null && kid?.needs_bed !== 'no'
		);
		if (
			(guestIsAssignedLodging && plusOneIsNotAssignedLodging) ||
			(guestIsAssignedLodging && kidIsNotAssignedLodging)
		) {
			setCapacityError(true);
		} else {
			setCapacityError(false);
		}
	};
	return (
		<>
			{loaded ? (
				<CabinInfoSection>
					{noLodgingNotice && (
						<Confirmation
							handleExit={() => setNoLodgingNotice(false)}
							confirm={true}
							content={{
								__html: `<span>You have not selected a cabin. <br/>Please select a cabin or select "No" for lodging</span>`,
							}}
						/>
					)}
					{displayDeclineLodgingModal && (
						<Confirmation
							handleExit={() => setDisplayDeclineLodgingModal(false)}
							handleContinue={() => handleDeclineLodging()}
							content={{
								__html: `<span>You have selected "No". <br/>This means you will be finding lodging yourself off-site. <br/>Is this correct?</span>`,
							}}
						/>
					)}
					<div className='stepper-container'>
						<Stepper step={2} />
					</div>
					<ToggleContainer>
						<SubHeading>Will you be lodging on-site?</SubHeading>
						<div>
							<Toggle
								toggleActive={acceptLodging}
								onChange={() => setAcceptLodging(!acceptLodging)}
							/>
						</div>
					</ToggleContainer>
					<div
						style={{
							padding: '2rem',
							margin: '1rem 0rem',
							backgroundColor: 'whitesmoke',
							maxWidth: '1150px',
						}}
					>
						<SubHeading className='small' style={{ padding: '10px 0px' }}>
							{selectedCabin?.lodging_type === 'apartment'
								? 'Important Message About Apartments'
								: 'Important Message About Cabins'}
						</SubHeading>
						<p className={`description ${acceptLodging && 'line-divider'}`}>
							{selectedCabin?.lodging_type === 'apartment'
								? 'You are currently pre-assigned to an apartment. You will not be able to adjust your lodging - though if for any reason you have comments or concerns about your lodging type, please reach out to us. These apartments do not require you to bring your own bedding. Also similarly to those staying in cabins, we are asking for a $30 dollar donation per person for lodging for Friday-Sunday. More about payment types can be found on the registry page.'
								: 'Staying in a cabin requires bringing your own bedding. While there are enough beds for everyone to stay in at the property - sleeping bags, pillows, towels and other toiletries will need to be brought with you. Additionally the cost of staying in a cabin on-site will be $30 per person for the entire weekend. You can learn more about payment types on the registry page.'}
						</p>
					</div>
					{offsiteCabin && (
						<Offsite>
							<OffsiteContainer>
								<FaExclamationTriangle />
								You are registered as staying off-site. If you would like to
								change this, you will need to select a cabin.
							</OffsiteContainer>
						</Offsite>
					)}

					{acceptLodging && (
						<div>
							{selectedCabin && !offsiteCabin && (
								<SelectedCabinSection>
									<SubHeading>
										{preSelectedCabin
											? 'You and your party have been pre-assigned lodging:'
											: 'You and your party are assigned to:'}
									</SubHeading>
									{capacityError && (
										<>
											<div
												id='error-anchor'
												style={{ position: 'absolute', top: '15%' }}
											/>

											<ErrorMessage>
												Important! Not everyone in your party can fit into this
												cabin as it is already full. Please select a new cabin
												that can accomidate your full party.
											</ErrorMessage>
										</>
									)}
									<SelectedCabinContainer>
										<ImageContainer>
											<img src={selectedCabin?.image_url ?? ''} alt='cabin' />
										</ImageContainer>
										<SelectedContent>
											<Heading>{selectedCabin?.name}</Heading>
											<p className='selected-p'>{selectedCabin?.description}</p>
											<p className='mobile-title'>{selectedCabin?.title}</p>
											<LinkContainer>
												<ViewMoreLink
													onClick={() => {
														setActiveModal(true);
														setActiveCard(selectedCabin);
													}}
												>
													View Details <FaArrowRight />
												</ViewMoreLink>
												{!preSelectedCabin && (
													<DeselectButton
														onClick={() => {
															setSelectedCabin(null);
															updateGuest(guest?.id, { lodging_id: null });
															setHideCabins(false);
														}}
													>
														Unselect Cabin
													</DeselectButton>
												)}
											</LinkContainer>
										</SelectedContent>
									</SelectedCabinContainer>
								</SelectedCabinSection>
							)}
							<SubHeading style={{ paddingBottom: '0px', marginBottom: '5px' }}>
								{selectedCabin
									? 'Browse other options below'
									: 'Please select a cabin from the list below'}
							</SubHeading>
							<p>
								{!preSelectedCabin
									? 'If you have any issues selecting a cabin, or cannot find a cabin that will fit your entire party, please reach out to us and we can assist.'
									: `While you can browse other options, you won't be able to change lodging. If you have any questions, comments or concerns please reach out to us.`}
							</p>
							<CabinListContainer className={`${!hideCabins && 'open'}`}>
								{cabinList && (
									<CabinCardsContainer>
										{cabinList.map((cabin, index) => {
											if (
												cabin.lodging_type !== 'apartment' &&
												cabin.lodging_type !== 'offsite'
											) {
												return (
													<Card
														disable={hideCabins}
														image={cabin?.image_url}
														name={cabin?.name}
														type={cabin?.lodging_type}
														remaining={cabin?.spots_remaining}
														occupants={cabin.occupants}
														color={cabin.color}
														onClick={() => handleCardClick(cabin)}
														key={`card-${index}`}
													/>
												);
											}
										})}
									</CabinCardsContainer>
								)}
								<div onClick={() => setHideCabins(!hideCabins)}>
									<ViewMoreButton className={`${!hideCabins && 'visible'}`}>
										{hideCabins ? 'View All' : 'Collapse List'}
										<ArrowContainer className={`${!hideCabins && 'arrow-up'}`}>
											<IoIosArrowDown />
										</ArrowContainer>
									</ViewMoreButton>
								</div>
							</CabinListContainer>

							{activeModal && (
								<Popup
									preSelectedCabin={preSelectedCabin}
									activeCard={activeCard}
									setHideCabins={setHideCabins}
									setActiveModal={setActiveModal}
									open={open}
								/>
							)}
						</div>
					)}
					<ButtonContainer>
						<ButtonSecondary onClick={() => regressFlow()} text='Back' />
						<Button
							type='button'
							onClick={() => handleContinue()}
							text='Continue'
						/>
					</ButtonContainer>
				</CabinInfoSection>
			) : (
				<Loading />
			)}
		</>
	);
}

/** @format */
import { useEffect, useState, useContext } from 'react';
import { GuestContext } from '../../../../context/GuestContext';
import { Confirmation, Stepper, Toggle } from '../../../../components/index';
import { FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import {
	CabinInfoSection,
	CabinCardsContainer,
	ButtonContainer,
	ToggleContainer,
	CabinListContainer,
	SelectedCabinContainer,
	SelectedCabinSection,
	Image,
	LinkContainer,
	ViewMoreLink,
	SelectedContent,
	DeselectButton,
	ArrowContainer,
	ViewMoreButton,
	ErrorMessage,
	Offsite,
} from './styled-components';
import {
	Card,
	ButtonSecondary,
	Button,
	Popup,
	Loading,
} from '../../../../components/index';
import { updateGuest, getLodgings, getSelectedGuest } from '../../Model';

export default function CabinPage({ regressFlow, progressFlow }) {
	const {
		guest,
		setGuest,
		cabinList,
		partyUpdated,
		setCabinList,
		selectedCabin,
		setSelectedCabin,
	} = useContext<any>(GuestContext);
	const [loaded, setLoaded] = useState(false);
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState<any>(null);
	const [noLodgingNotice, setNoLodgingNotice] = useState(false);
	const [displayDeclineLodgingModal, setDisplayDeclineLodgingModal] =
		useState(false);
	const [hideCabins, setHideCabins] = useState(false);
	const [capacityError, setCapacityError] = useState(false);

	const offsiteCabin = selectedCabin?.id === 24;

	const [acceptLodging, setAcceptLodging] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			setCurrentState();
			setLoaded(true);
		})();
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
		updateCabinList();
		updateGuestInfo();
	}, [selectedCabin]);

	function setCurrentState() {
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
		if (
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
								__html: `<span>You have not selected a cabin. <br />Please select a cabin or <br/>select "No" for lodging</span>`,
							}}
						/>
					)}
					{displayDeclineLodgingModal && (
						<Confirmation
							handleExit={() => setDisplayDeclineLodgingModal(false)}
							handleContinue={() => handleDeclineLodging()}
							content={{
								__html: `<span>You have selected "No" to on-site lodging.<br/> This means you will be finding lodging yourself off-site. <br/>Is this correct?</span>`,
							}}
						/>
					)}
					<div className='stepper-container'>
						<Stepper step={2} />
					</div>

					<ToggleContainer>
						<div className='sub-heading'>
							Will you be staying on-site in a cabin?
						</div>
						<div>
							<Toggle
								toggleActive={acceptLodging}
								onChange={() => setAcceptLodging(!acceptLodging)}
							/>
						</div>
					</ToggleContainer>
					<div>
						<p className='title'>Important Message About Cabins</p>
						<p className={`description ${acceptLodging && 'line-divider'}`}>
							Staying in a cabin requires bringing your own bedding. While there
							are enough beds for everyone to stay in at the property - sleeping
							bags, pillows, towels and other toiletries will need to be brought
							with you. Additionally the cost of staying in a cabin on-site will
							be $30 per person for the entire weekend.
						</p>
					</div>
					{offsiteCabin && (
						<Offsite>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									padding: '1rem',
								}}
							>
								<FaExclamationTriangle />
								You are registered as staying off-site. If you would like to
								change this, you will need to select a cabin.
							</div>
						</Offsite>
					)}

					{acceptLodging && (
						<div>
							{selectedCabin && !offsiteCabin && (
								<SelectedCabinSection>
									<h3>You and your party are assigned to:</h3>
									{capacityError && (
										<ErrorMessage>
											Important! Not everyone in your party can fit into this
											cabin as it is already full. Please select a new cabin
											that can accomidate your full party.
										</ErrorMessage>
									)}
									<SelectedCabinContainer>
										<Image image={selectedCabin?.image_url ?? ''} />
										<SelectedContent>
											<h1>{selectedCabin?.name}</h1>
											<p className='selected-p'>{selectedCabin?.description}</p>
											<LinkContainer>
												<ViewMoreLink
													onClick={() => {
														setActiveModal(true);
														setActiveCard(selectedCabin);
													}}
												>
													View Details <FaArrowRight />
												</ViewMoreLink>
												<DeselectButton
													onClick={() => {
														setSelectedCabin(null);
														updateGuest(guest?.id, { lodging_id: null });
														setHideCabins(false);
													}}
												>
													Unselect Cabin
												</DeselectButton>
											</LinkContainer>
										</SelectedContent>
									</SelectedCabinContainer>
								</SelectedCabinSection>
							)}
							<h3 style={{ paddingBottom: '0px', marginBottom: '5px' }}>
								{selectedCabin
									? 'Browse other options below'
									: 'Please select a cabin from the list below'}
							</h3>
							<p>
								If you have any issues selecting a cabin, or cannot find a cabin
								that will fit your entire party, please reach out to us and we
								can assist.
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
														onClick={() => handleCardClick(cabin)}
														key={`card-${index}`}
													/>
												);
											}
										})}
									</CabinCardsContainer>
								)}
								<ViewMoreButton
									onClick={() => setHideCabins(!hideCabins)}
									visible={hideCabins}
								>
									{hideCabins ? 'View All' : 'Collapse List'}
									<ArrowContainer className={`${!hideCabins && 'arrow-up'}`}>
										<IoIosArrowDown />
									</ArrowContainer>
								</ViewMoreButton>
							</CabinListContainer>

							{activeModal && (
								<Popup
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
						<Button onClick={() => handleContinue()} text='Continue' />
					</ButtonContainer>
				</CabinInfoSection>
			) : (
				<Loading />
			)}
		</>
	);
}

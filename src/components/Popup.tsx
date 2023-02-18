/** @format */
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbBrandAirbnb } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import ButtonFullWidth from './ButtonFullWidth';
import ButtonError from './ButtonError';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { GuestContext } from '../context/GuestContext';
import { getSelectedLodge, updateGuest } from '../views/RSVP/Model';

const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 200px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 5px;
	width: 100%;
	@media only screen and (min-width: 900px) {
		height: 500px;
		min-width: 500px;
	}
`;

const Title = styled.div`
	padding: 1rem 2rem 2rem 3rem;
	@media only screen and (max-width: 1200px) {
		padding: 0rem;
	}

	p.spots-remaining {
		font-size: 16px;
		padding: 1rem 0rem;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.airbnb-link {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0px;
		gap: 5px;
		text-decoration: underline;
		:hover {
			cursor: pointer;
			color: lightgray;
		}
	}
`;

const ExitButton = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 3rem 20px 0px 0px;
	font-size: 25px;
	svg {
		z-index: 10001;
		:hover {
			cursor: pointer;
		}
	}
`;

const CabinSpotContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 1rem;
	span {
		font-family: 'Circular-Light';
	}
`;

const CabinSpot = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	width: 170px;
	padding: 5px;
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		&.spot-number {
			font-size: 12px;
			background-color: ${(p) => p.color && p.color};
			min-width: 25px;
			height: 25px;
			color: white;
			margin-right: 10px;
			border-radius: 10px;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 4rem 1rem 3rem 1rem;
`;

const ContentGroup = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`;

const Heading = styled.div`
	padding-top: 0px;
	font-size: 40px;
	font-family: 'Circular-Book';
	@media only screen and (max-width: 900px) {
		font-size: 30px;
		padding-top: 20px;
	}
`;

export default function Popup({
	open,
	activeCard,
	setActiveModal,
	setHideCabins,
}) {
	const dummyImage =
		'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

	const { guest, selectedCabin, setSelectedCabin } =
		useContext<any>(GuestContext);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	const [content, setContent] = useState<any>(activeCard);

	useEffect(() => {
		updateCabin();
	}, []);

	const handleSelectCabin = () => {
		if (activeCard?.id === selectedCabin?.id) {
			updateGuest(guest?.id, { lodging_id: null });
			setActiveModal(false);
			setSelectedCabin(null);
			setHideCabins(false);
		} else {
			setActiveModal(false);
			setSelectedCabin(activeCard);
			updateGuest(guest?.id, { lodging_id: activeCard.id });
			setHideCabins(true);
		}
	};

	const handleExit = () => {
		setActiveModal(false);
	};

	async function updateCabin() {
		try {
			const result = await getSelectedLodge(activeCard.id);
			setContent(result);
		} catch (error) {
			console.error(error);
		}
	}

	const determineButtonText = () => {
		if (guest.bed_count > content.spots_remaining)
			return 'Not enough beds for your party';
		else if (
			content.occupants.some((guest) => guest !== 'Spot Available') &&
			content.lodging_type === 'rv'
		) {
			return 'Only one party per site allowed';
		} else if (
			content.occupants.some((guest) => guest === 'Spot Available') &&
			content.lodging_type === 'rv'
		) {
			return 'Select This Site';
		} else {
			return 'Select This Cabin';
		}
	};
	return (
		<div key={`cabin-popup-${activeCard.id}`}>
			<Dialog
				fullScreen={true}
				open={open}
				onClose={handleExit}
				aria-labelledby='responsive-dialog-title'
				scroll='body'
				sx={{ marginTop: '5rem' }}
				maxWidth={'xl'}
			>
				<ExitButton>
					<GrClose onClick={() => handleExit()} />
				</ExitButton>
				<DialogContent>
					<ContentGroup>
						<Image image={content.image_url ? content.image_url : dummyImage} />
						<Title>
							<Heading>{content.name}</Heading>
							<div className='links' onClick={() => window.open(content.url)}>
								<div className='airbnb-link'>
									<TbBrandAirbnb /> View on Airbnb
								</div>
							</div>
							<p className='description'> {content.description}</p>
							<CabinSpotContainer>
								{content.occupants.map((occupant, index) => {
									return (
										<CabinSpot
											key={index}
											color={
												occupant !== 'Spot Available'
													? content.color
													: '#242424'
											}
										>
											<div className='spot-number'>{index + 1}</div>
											<span>{occupant}</span>
										</CabinSpot>
									);
								})}
							</CabinSpotContainer>
							<ButtonContainer>
								{activeCard?.id === selectedCabin?.id ? (
									<ButtonError
										onClick={() => handleSelectCabin()}
										text='Unselect This Cabin'
										fullWidth
									/>
								) : (
									<ButtonFullWidth
										disabled={
											guest.bed_count > content.spots_remaining ||
											(content.occupants.some(
												(guest) => guest !== 'Spot Available'
											) &&
												content.lodging_type === 'rv')
										}
										onClick={() => handleSelectCabin()}
										text={determineButtonText()}
									/>
								)}
							</ButtonContainer>
						</Title>
					</ContentGroup>
				</DialogContent>
			</Dialog>
		</div>
	);
}

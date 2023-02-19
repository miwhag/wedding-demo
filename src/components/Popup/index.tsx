/** @format */
import { useContext, useEffect, useState } from 'react';
import { TbBrandAirbnb } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { GuestContext } from '../../context/GuestContext';
import { getSelectedLodge, updateGuest } from '../../views/RSVP/Model';
import { ButtonError, ButtonFullWidth } from '../index';
import {
	ContentGroup,
	ImageContainer,
	Title,
	ExitButton,
	TypeLabel,
	Image,
	Heading,
	CabinSpot,
	CabinSpotContainer,
	ButtonContainer,
} from './styled-components';

export default function Popup({
	open,
	activeCard,
	setActiveModal,
	setHideCabins,
	preSelectedCabin,
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

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	return (
		<div key={`cabin-popup-${activeCard.id}`}>
			<Dialog
				fullScreen={fullScreen}
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
						<ImageContainer>
							<Image
								image={content.image_url ? content.image_url : dummyImage}
							/>
							<TypeLabel color={content.color}>
								{capitalizeFirstLetter(content.lodging_type)}
							</TypeLabel>
						</ImageContainer>

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
							{!preSelectedCabin && (
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
							)}
						</Title>
					</ContentGroup>
				</DialogContent>
			</Dialog>
		</div>
	);
}

/** @format */
import { useState, createContext } from 'react';

export const GuestContext = createContext({});
export const GuestProvider = (props) => {
	const emptyGuest = {
		id: 0,
		first_name: '',
		last_name: '',
		email: '',
		rsvp: '',
		diet: '',
		payment_method: '',
		arrival_date: '',
		party_count: 0,
		plus_one_count: 0,
		comments: '',
		lodging_id: null,
		team_id: null,
		created_at: '',
		updated_at: '',
		bed_count: 0,
		breakfast: '',
		full_name: '',
		kids: [],
		plus_ones: [],
	};

	const [selectedCabin, setSelectedCabin] = useState(null);
	const [cabinList, setCabinList] = useState([]);
	const [guest, setGuest] = useState(emptyGuest);
	const [childList, setChildList] = useState([
		{
			name: '',
			age: '',
			needs_bed: '',
		},
	]);

	return (
		<GuestContext.Provider
			value={{
				guest,
				setGuest,
				childList,
				setChildList,
				cabinList,
				setCabinList,
				selectedCabin,
				setSelectedCabin,
			}}
		>
			{props.children}
		</GuestContext.Provider>
	);
};

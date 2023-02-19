/** @format */

export const steps = {
	start: 'START',
	verify: 'VERIFY',
	contact: 'CONTACT',
	cabin: 'CABIN',
	confirm: 'CONFIRM',
	additional: 'ADDITIONAL',
};

export async function getGuests() {
	try {
		const response = await fetch(
			'https://mm-wedding-backend.herokuapp.com/guest_list',
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function getSelectedGuest(id) {
	try {
		const response = await fetch(
			`https://mm-wedding-backend.herokuapp.com/guests/${id}`,
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function sendGuestEmail(id) {
	try {
		const response = await fetch(
			`https://mm-wedding-backend.herokuapp.com/guests/${id}/email`,
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function getLodgings() {
	try {
		const response = await fetch(
			'https://mm-wedding-backend.herokuapp.com/lodgings',
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}
export async function getSelectedLodge(id) {
	try {
		const response = await fetch(
			`https://mm-wedding-backend.herokuapp.com/lodgings/${id}`,
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}

export function updateGuest(id, body) {
	fetch(`https://mm-wedding-backend.herokuapp.com/guests/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}

export async function createPlusOne(body) {
	fetch('https://mm-wedding-backend.herokuapp.com/plus_ones', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}

export async function updatePlusOne(plus_one_id, body) {
	fetch(`https://mm-wedding-backend.herokuapp.com/plus_ones/${plus_one_id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}

export async function deletePlusOne(plus_one_id) {
	fetch(`https://mm-wedding-backend.herokuapp.com/plus_ones/${plus_one_id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}

export async function setKids(id, body) {
	fetch(`https://mm-wedding-backend.herokuapp.com/guests/${id}/kids`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}

export async function updateDodgeball(body) {
	fetch('https://mm-wedding-backend.herokuapp.com/dodgeball', {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}

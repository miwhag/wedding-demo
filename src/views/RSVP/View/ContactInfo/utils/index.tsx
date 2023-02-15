/** @format */

export const getFormValues = () => {
	let first_name = (
		document.getElementById('first-name-input') as HTMLInputElement
	).value;
	let last_name = (
		document.getElementById('last-name-input') as HTMLInputElement
	).value;
	let email = (document.getElementById('email-input') as HTMLInputElement)
		.value;
	return {
		first_name: first_name,
		last_name: last_name,
		email: email,
	};
};

export const plusOneFormValue = () => {
	let plusOne = (document?.getElementById('plus-one-input') as HTMLInputElement)
		?.value;

	return {
		name: plusOne,
	};
};

const kidsErrors = (childlist) =>
	childlist.some(
		(kid) => kid.name === '' || kid.age === '' || kid.needs_bed === ''
	);

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export function checkForErrors({
	childList,
	children,
	childCare,
	setChildCareError,
	setRsvpError,
	rsvp,
	email,
	setEmailError,
	plusOneToggle,
	plusOneName,
	setPlusOneError,
}) {
	if ((children && childCare === '') || (children && kidsErrors(childList))) {
		setChildCareError(true);
	} else {
		setChildCareError(false);
	}
	if (rsvp === '' || rsvp === null) {
		setRsvpError(true);
	} else {
		setRsvpError(false);
	}
	if (!validateEmail(email)) {
		setEmailError(true);
	} else {
		setEmailError(false);
	}
	if (
		(plusOneToggle && plusOneName?.replace(/\s/g, '') === '') ||
		(plusOneToggle && plusOneName === null) ||
		(plusOneToggle && plusOneName === undefined)
	) {
		setPlusOneError(true);
	} else {
		setPlusOneError(false);
	}

	if (
		(children && childCare === '') ||
		(children && kidsErrors(childList)) ||
		rsvp === '' ||
		rsvp === null ||
		(plusOneToggle && plusOneName === null) ||
		(plusOneToggle && plusOneName?.replace(/\s/g, '') === '') ||
		(plusOneToggle && plusOneName === undefined) ||
		!validateEmail(email)
	) {
		return true;
	} else {
		return false;
	}
}

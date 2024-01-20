export function validatePassword(password) {
	const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
	return regex.test(password);
}

export function validateEmail(email) {
	const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	return regex.test(email);
}

// Función para manejar las validaciones
export function validateFields(values, password, email) {
	if (values.some(value => value === '')) {
		return 'Please fill all the fields.';
	}
	if (!validatePassword(password)) {
		return 'Password does not meet the requirements.';
	}
	if (!validateEmail(email)) {
		return 'Email is invalid.';
	}
	return null;
}

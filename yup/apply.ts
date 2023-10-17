import * as yup from 'yup';

export const applySchema = yup.object().shape({
	name: yup
		.string()
		.required('To pole jest wymagane')
		.min(3, 'Imię powinno składać się z minim 3 znaków')
		.max(64, 'Przekroczono dozwoloną liczbę znaków'),
	surname: yup
		.string()
		.required('To pole jest wymagane')
		.min(3, 'Nazwisko powinno składać się z min 3 znaków')
		.max(64, 'Przekroczono dozwoloną liczbę znaków'),
	email: yup.string().email('Email posiada nie własciwą konstrukcję - @gmail.com').required('To pole jest wymagane'),
	phone: yup.string().required('To pole jest wymagane').min(12, 'Numer telefonu powinien zawierać +48'),
	cv: yup.mixed().required('To pole jest wymagane'),
	regulations: yup.bool().oneOf([true], 'To pole jest wymagane'),
});

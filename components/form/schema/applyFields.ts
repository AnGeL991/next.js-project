import { FieldProps } from '@/components/form/types';

export const applyFields: FieldProps[] = [
	{ keyName: 'email', displayName: 'E-mail', isFormDisabled: false, type: 'text', halfSize: false, checkbox: false },
	{ keyName: 'name', displayName: 'Imię', isFormDisabled: false, type: 'text', halfSize: true, checkbox: false },
	{ keyName: 'surname', displayName: 'Nazwisko', isFormDisabled: false, type: 'text', halfSize: true, checkbox: false },
	{ keyName: 'phone', displayName: 'Telefon', isFormDisabled: false, type: 'text', halfSize: true, checkbox: false },
	{ keyName: 'cv', displayName: 'Cv', isFormDisabled: false, type: 'file', halfSize: true, checkbox: false },
	{ keyName: 'regulations', displayName: 'Akceptuję Regulamin', isFormDisabled: false, halfSize: false, checkbox: true },
	{
		keyName: 'acceptTerms',
		displayName:
			'Wyrażam zgodę na przetwarzanie moich danych osobowych ujawnionych w powyższym formularzu i otrzymywanie powiadomień o nowych ofertach pracy od GotIt.pl Serwis Pracy sp. z o.o. za pomocą środków komunikacji elektronicznej na podany przez mnie adres poczty elektronicznej',
		isFormDisabled: false,
		halfSize: false,
		checkbox: true,
	},
	{
		keyName: 'notification',
		displayName: 'Powiadom mnie o podobnych ofertach pracy - w każdym momencie możesz zrezygnować z otrzymywania mailingów.',
		isFormDisabled: false,
		halfSize: false,
		checkbox: true,
	},
];

export const dateConverter = (date: string): string => {
	const localDate = new Date(date);

	const day = localDate.getDate();
	const month = localDate.getMonth();
	const year = localDate.getFullYear();

	return `${day}.${month}.${year}`;
};

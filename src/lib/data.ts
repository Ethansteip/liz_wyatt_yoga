export const schedule = [
	{
		id: 1,
		location: 'St. Agatha CC',
		address: 'St. Agatha Community Centre, Wilmot',
		weekday: getNextDayOfWeek(1),
		class: 'Chair Yoga',
		time: '9:00 - 10:00 am'
	},
	{
		id: 2,
		location: 'St. Agatha CC',
		address: 'St. Agatha Community Centre, Wilmot',
		weekday: getNextDayOfWeek(1),
		class: 'Mat Yoga',
		time: '10:15 - 11:15 am'
	},
	{
		id: 3,
		location: 'WMRC',
		address: 'Waterloo Memorial Recreation Complex, Father David Bauer Dr., Waterloo',
		weekday: getNextDayOfWeek(2),
		class: 'Chair Yoga',
		time: '10:00 - 11:00 am'
	},
	{
		id: 4,
		location: 'WMRC',
		address: 'Waterloo Memorial Recreation Complex, Father David Bauer Dr., Waterloo',
		weekday: getNextDayOfWeek(2),
		class: 'Mat Yoga',
		time: '11:15 - 12:15 pm'
	},
	{
		id: 5,
		location: 'RIM',
		address: 'RIM Park, University Ave. E., Waterloo',
		weekday: getNextDayOfWeek(3),
		class: 'Mat Yoga',
		time: '10:00 - 11:00 am'
	},
	{
		id: 6,
		location: 'RIM',
		address: 'RIM Park, University Ave. E., Waterloo',
		weekday: getNextDayOfWeek(3),
		class: 'Mat Yoga',
		time: '6:45 - 7:45 pm'
	}
];

function getNextDayOfWeek(targetDay: number) {
	if (targetDay < 0 || targetDay > 6) {
		throw new Error('Invalid day of the week. Use a number between 0 (Sunday) and 6 (Saturday).');
	}

	const today = new Date();
	const currentDay = today.getDay(); // Get current day of the week
	const daysUntilTarget = (targetDay - currentDay + 7) % 7 || 7; // Calculate days until the target day
	const nextDay = new Date(today);
	nextDay.setDate(today.getDate() + daysUntilTarget); // Add days until the target day to today's date

	return nextDay.toLocaleDateString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

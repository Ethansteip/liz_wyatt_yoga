import ChairYoga1 from '$lib/assets/chair-yoga-2.jpg';
import ChairYoga5 from '$lib/assets/chair-yoga-5.jpg';
import MatYoga1 from '$lib/assets/mat-yoga-1.jpg';
import MatYoga2 from '$lib/assets/mat-yoga-2.jpg';
import MatYoga3 from '$lib/assets/mat-yoga-3.jpg';
import MatYoga6 from '$lib/assets/mat-yoga-6.jpg';

export const yogaDescriptions = {
	'Chair Yoga':
		'A gentle form of yoga that can be done while seated. Perfect for seniors, those with limited mobility, or anyone looking for a more accessible yoga practice. Benefits include improved flexibility, better posture, reduced stress, and enhanced breathing awareness - all while remaining seated in a chair.',
	'Mat Yoga':
		'Traditional yoga practice performed on a yoga mat. Includes standing and floor poses to improve flexibility, strength, and balance. Benefits include increased muscle strength, better posture, stress reduction, improved breathing, and enhanced mind-body connection.'
};

export const schedule = [
	{
		id: 1,
		classActive: false,
		location: 'St. Agatha Community Centre',
		address: 'St. Agatha Community Centre, 1791 Erbs Rd, St. Agatha, ON N3A 3M3',
		duration: '',
		weekday: 'Dates to be announced',
		class: 'Chair Yoga',
		image: ChairYoga1,
		time: 'Dates to be announced',
		mapLocation: 'st-agatha',
		price: 'To be announced'
	},
	{
		id: 2,
		classActive: false,
		location: 'St. Agatha Community Centre',
		address: 'St. Agatha Community Centre, 1791 Erbs Rd, St. Agatha, ON N3A 3M3',
		duration: '',
		weekday: 'Dates to be announced',
		class: 'Mat Yoga',
		image: MatYoga1,
		time: 'Dates to be announced',
		mapLocation: 'st-agatha',
		price: 'To be announced'
	},
	{
		id: 3,
		classActive: true,
		location: 'Waterloo Memorial Recreation Complex',
		address:
			'Waterloo Memorial Recreation Complex, 101 Father David Bauer Dr, Waterloo, ON N2L 0B4',
		duration: 'April 8th - June 24th',
		weekday: `Next class - ${getNextDayOfWeek(2)}`,
		class: 'Chair Yoga',
		image: ChairYoga5,
		time: 'Tuesdays - 10:00 - 11:00 am',
		mapLocation: 'wmrc',
		price: '$132 for 12 weeks - 55+ is $99 / 12 Weeks',
		dropInPrice: 'Drop in rate - $14.30 per class or $55+ $10.70 per class'
	},
	{
		id: 4,
		classActive: true,
		location: 'Waterloo Memorial Recreation Complex',
		address:
			'Waterloo Memorial Recreation Complex, 101 Father David Bauer Dr, Waterloo, ON N2L 0B4',
		duration: 'April 8th - June 24th',
		weekday: `Next class - ${getNextDayOfWeek(2)}`,
		class: 'Mat Yoga',
		image: MatYoga3,
		time: 'Tuesdays - 11:15 - 12:15 pm',
		mapLocation: 'wmrc',
		price: '$132 for 12 weeks - 55+ is $99 / 12 Weeks',
		dropInPrice: 'Drop in rate - $14.30 per class or $55+ $10.70 per class'
	},
	{
		id: 5,
		classActive: true,
		location: 'RIM Park',
		address: 'RIM Park, 2001 University Ave, Waterloo, ON N2K 4K4',
		duration: 'May 7th - June 25th',
		weekday: `Next class - ${getNextDayOfWeek(3)}`,
		class: 'Mat Yoga',
		image: MatYoga2,
		time: 'Wednesdays - 10:00 - 11:00 am',
		mapLocation: 'rim',
		price: '$77 for 8 weeks - 55+ is $57.75 / 8 Weeks',
		dropInPrice: 'Drop in rate - $14.30 per class or $55+ $10.70 per class'
	},
	{
		id: 6,
		classActive: true,
		location: 'RIM Park',
		address: 'RIM Park, 2001 University Ave, Waterloo, ON N2K 4K4',
		duration: 'May 7th - June 25th',
		weekday: `Next class - ${getNextDayOfWeek(3)}`,
		class: 'Mat Yoga',
		image: MatYoga6,
		time: 'Wednesdays - 6:45 - 7:45 pm',
		mapLocation: 'rim',
		price: '$77 for 8 weeks - 55+ is $57.75 / 8 Weeks',
		dropInPrice: 'Drop in rate - $14.30 per class or $55+ $10.70 per class'
	}
];

function getNextDayOfWeek(targetDay: number) {
	if (targetDay < 0 || targetDay > 6) {
		throw new Error('Invalid day of the week. Use a number between 0 (Sunday) and 6 (Saturday).');
	}

	const today = new Date();
	const currentDay = today.getDay(); // Get current day of the week

	// If target day is today, return today's date
	if (currentDay === targetDay) {
		return today.toLocaleDateString(undefined, {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Otherwise, calculate next occurrence as before
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

import ChairYoga2 from '$lib/assets/chair-yoga-2.jpg';
//import ChairYoga5 from '$lib/assets/chair-yoga-5.jpg';
import MatYoga2 from '$lib/assets/mat-yoga-2.jpg';
import MatYoga3 from '$lib/assets/mat-yoga-3.jpg';
import MatYoga7 from '$lib/assets/mat-yoga-7.jpg';
import MatYoga6 from '$lib/assets/mat-yoga-6.jpg';

interface YogaClass {
	id: number;
	classActive: boolean;
	location: string;
	address: string;
	duration: string;
	weekday: string;
	dates?: string[];
	class: string;
	image: string;
	time: string;
	mapLocation: string;
	price: string;
	dropInPrice?: string;
	additionalInfo?: string;
}

function getNextClassDate(dates?: string[]) {
	if (!dates || dates.length === 0) {
		return 'No upcoming classes';
	}

	const today = new Date();
	today.setHours(0, 0, 0, 0); // Reset time to compare dates only

	// Convert date strings to Date objects and find the next upcoming date
	const nextDate = dates
		.map((dateStr) => {
			const [, month, day, year] = dateStr.split(', ');
			return new Date(`${month} ${day}, ${year}`);
		})
		.find((date) => date >= today);

	if (!nextDate) {
		return 'No upcoming classes';
	}

	return nextDate.toLocaleDateString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export const yogaDescriptions = {
	'Chair Yoga':
		'A gentle form of yoga that can be done while seated. Perfect for seniors, those with limited mobility, or anyone looking for a more accessible yoga practice. Benefits include improved flexibility, better posture, reduced stress, and enhanced breathing awareness - all while remaining seated in a chair.',
	'Mat Yoga':
		'Traditional yoga practice performed on a yoga mat. Includes standing and floor poses to improve flexibility, strength, and balance. Benefits include increased muscle strength, better posture, stress reduction, improved breathing, and enhanced mind-body connection.'
};

const scheduleData: YogaClass[] = [
	{
		id: 1,
		classActive: true,
		location: 'Waterloo Memorial Recreation Complex',
		address:
			'Waterloo Memorial Recreation Complex, 101 Father David Bauer Dr, Waterloo, ON N2L 0B4',
		duration: 'September 9th - December 9th',
		weekday: `Next class - ${getNextClassDate([
			'Tuesday, September, 9, 2025',
			'Tuesday, September, 16, 2025',
			'Tuesday, September, 23, 2025',
			'Tuesday, September, 30, 2025',
			'Tuesday, October, 7, 2025',
			'Tuesday, October, 14, 2025',
			'Tuesday, October, 21, 2025',
			'Tuesday, October, 28, 2025',
			'Tuesday, November, 4, 2025',
			'Tuesday, November, 11, 2025',
			'Tuesday, November, 18, 2025',
			'Tuesday, November, 25, 2025',
			'Tuesday, December, 2, 2025',
			'Tuesday, December, 9, 2025'
		])}`,
		dates: [
			'Tuesday, September, 9, 2025',
			'Tuesday, September, 16, 2025',
			'Tuesday, September, 23, 2025',
			'Tuesday, September, 30, 2025',
			'Tuesday, October, 7, 2025',
			'Tuesday, October, 14, 2025',
			'Tuesday, October, 21, 2025',
			'Tuesday, October, 28, 2025',
			'Tuesday, November, 4, 2025',
			'Tuesday, November, 11, 2025',
			'Tuesday, November, 18, 2025',
			'Tuesday, November, 25, 2025',
			'Tuesday, December, 2, 2025',
			'Tuesday, December, 9, 2025'
		],
		class: 'Chair Yoga',
		image: ChairYoga2,
		time: 'Tuesdays - 10:00 - 11:00 am',
		mapLocation: 'wmrc',
		price: '$161.00 for ages 54 and under, $120.75 for ages 55+ (14 weeks)',
		dropInPrice: '$14.30 for ages 54 and under, $10.70 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.'
	},
	{
		id: 2,
		classActive: true,
		location: 'Waterloo Memorial Recreation Complex',
		address:
			'Waterloo Memorial Recreation Complex, 101 Father David Bauer Dr, Waterloo, ON N2L 0B4',
		duration: 'September 9th - December 9th',
		weekday: `Next class - ${getNextClassDate([
			'Tuesday, September, 9, 2025',
			'Tuesday, September, 16, 2025',
			'Tuesday, September, 23, 2025',
			'Tuesday, September, 30, 2025',
			'Tuesday, October, 7, 2025',
			'Tuesday, October, 14, 2025',
			'Tuesday, October, 21, 2025',
			'Tuesday, October, 28, 2025',
			'Tuesday, November, 4, 2025',
			'Tuesday, November, 11, 2025',
			'Tuesday, November, 18, 2025',
			'Tuesday, November, 25, 2025',
			'Tuesday, December, 2, 2025',
			'Tuesday, December, 9, 2025'
		])}`,
		dates: [
			'Tuesday, September, 9, 2025',
			'Tuesday, September, 16, 2025',
			'Tuesday, September, 23, 2025',
			'Tuesday, September, 30, 2025',
			'Tuesday, October, 7, 2025',
			'Tuesday, October, 14, 2025',
			'Tuesday, October, 21, 2025',
			'Tuesday, October, 28, 2025',
			'Tuesday, November, 4, 2025',
			'Tuesday, November, 11, 2025',
			'Tuesday, November, 18, 2025',
			'Tuesday, November, 25, 2025',
			'Tuesday, December, 2, 2025',
			'Tuesday, December, 9, 2025'
		],
		class: 'Mat Yoga',
		image: MatYoga7,
		time: 'Tuesdays - 11:15 - 12:15 pm',
		mapLocation: 'wmrc',
		price: '$161.00 for ages 54 and under, $120.75 for ages 55+ (14 weeks)',
		dropInPrice: '$14.30 for ages 54 and under, $10.70 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.'
	},
	{
		id: 3,
		classActive: true,
		location: 'RIM Park',
		address: 'RIM Park, 2001 University Ave, Waterloo, ON N2K 4K4',
		duration: 'September 10th - December 10th',
		weekday: `Next class - ${getNextClassDate([
			'Tuesday, September, 10, 2025',
			'Tuesday, September, 17, 2025',
			'Tuesday, September, 24, 2025',
			'Tuesday, October, 1, 2025',
			'Tuesday, October, 8, 2025',
			'Tuesday, October, 15, 2025',
			'Tuesday, October, 22, 2025',
			'Tuesday, October, 29, 2025',
			'Tuesday, November, 5, 2025',
			'Tuesday, November, 12, 2025',
			'Tuesday, November, 19, 2025',
			'Tuesday, November, 26, 2025',
			'Tuesday, December, 3, 2025',
			'Tuesday, December, 10, 2025'
		])}`,
		dates: [
			'Tuesday, September, 10, 2025',
			'Tuesday, September, 17, 2025',
			'Tuesday, September, 24, 2025',
			'Tuesday, October, 1, 2025',
			'Tuesday, October, 8, 2025',
			'Tuesday, October, 15, 2025',
			'Tuesday, October, 22, 2025',
			'Tuesday, October, 29, 2025',
			'Tuesday, November, 5, 2025',
			'Tuesday, November, 12, 2025',
			'Tuesday, November, 19, 2025',
			'Tuesday, November, 26, 2025',
			'Tuesday, December, 3, 2025',
			'Tuesday, December, 10, 2025'
		],
		class: 'Mat Yoga',
		image: MatYoga2,
		time: 'Wednesdays - 10:00 - 11:00 am',
		mapLocation: 'rim',
		price: '$161.00 for ages 54 and under, $120.75 for ages 55+ (14 weeks)',
		dropInPrice: '$14.30 for ages 54 and under, $10.70 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.'
	},
	{
		id: 4,
		classActive: true,
		location: 'RIM Park',
		address: 'RIM Park, 2001 University Ave, Waterloo, ON N2K 4K4',
		duration: 'September 10th - December 10th',
		weekday: `Next class - ${getNextClassDate([
			'Tuesday, September, 10, 2025',
			'Tuesday, September, 17, 2025',
			'Tuesday, September, 24, 2025',
			'Tuesday, October, 1, 2025',
			'Tuesday, October, 8, 2025',
			'Tuesday, October, 15, 2025',
			'Tuesday, October, 22, 2025',
			'Tuesday, October, 29, 2025',
			'Tuesday, November, 5, 2025',
			'Tuesday, November, 12, 2025',
			'Tuesday, November, 19, 2025',
			'Tuesday, November, 26, 2025',
			'Tuesday, December, 3, 2025',
			'Tuesday, December, 10, 2025'
		])}`,
		dates: [
			'Tuesday, September, 10, 2025',
			'Tuesday, September, 17, 2025',
			'Tuesday, September, 24, 2025',
			'Tuesday, October, 1, 2025',
			'Tuesday, October, 8, 2025',
			'Tuesday, October, 15, 2025',
			'Tuesday, October, 22, 2025',
			'Tuesday, October, 29, 2025',
			'Tuesday, November, 5, 2025',
			'Tuesday, November, 12, 2025',
			'Tuesday, November, 19, 2025',
			'Tuesday, November, 26, 2025',
			'Tuesday, December, 3, 2025',
			'Tuesday, December, 10, 2025'
		],
		class: 'Mat Yoga',
		image: MatYoga6,
		time: 'Wednesdays - 6:15 - 7:15 pm',
		mapLocation: 'rim',
		price: '$161.00 for ages 54 and under, $120.75 for ages 55+ (14 weeks)',
		dropInPrice: '$14.30 for ages 54 and under, $10.70 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.'
	},
	{
		id: 5,
		classActive: false,
		location: 'St. Agatha Community Centre',
		address: 'St. Agatha Community Centre, 1791 Erbs Rd, St. Agatha, ON N3A 3M3',
		duration: '',
		weekday: 'Dates to be announced',
		class: 'Mat Yoga',
		image: MatYoga3,
		time: 'Dates to be announced',
		mapLocation: 'st-agatha',
		price: 'To be announced'
	}
	// {
	// 	id: 6,
	// 	classActive: false,
	// 	location: 'St. Agatha Community Centre',
	// 	address: 'St. Agatha Community Centre, 1791 Erbs Rd, St. Agatha, ON N3A 3M3',
	// 	duration: '',
	// 	weekday: 'Dates to be announced',
	// 	class: 'Mat Yoga',
	// 	image: MatYoga1,
	// 	time: 'Dates to be announced',
	// 	mapLocation: 'st-agatha',
	// 	price: 'To be announced'
	// }
];

export const schedule = scheduleData;

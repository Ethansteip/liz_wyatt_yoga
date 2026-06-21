import ChairYoga2 from '$lib/assets/chair-yoga-2.jpg';
//import ChairYoga5 from '$lib/assets/chair-yoga-5.jpg';
import MatYoga2 from '$lib/assets/mat-yoga-2.jpg';
import MatYoga3 from '$lib/assets/mat-yoga-3.jpg';
import MatYoga7 from '$lib/assets/mat-yoga-7.jpg';

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
	link?: string;
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
		duration: 'September 8th - December 8th 2026',
		weekday: `Next class - ${getNextClassDate([
			'Tuesday, June, 23, 2026',
			'Tuesday, September, 8, 2026',
			'Tuesday, September, 15, 2026',
			'Tuesday, September, 22, 2026',
			'Tuesday, September, 29, 2026',
			'Tuesday, October, 6, 2026',
			'Tuesday, October, 13, 2026',
			'Tuesday, October, 20, 2026',
			'Tuesday, October, 27, 2026',
			'Tuesday, November, 3, 2026',
			'Tuesday, November, 10, 2026',
			'Tuesday, November, 17, 2026',
			'Tuesday, November, 24, 2026',
			'Tuesday, December, 1, 2026',
			'Tuesday, December, 8, 2026'
		])}`,
		dates: [
			'Tuesday, June, 23, 2026',
			'Tuesday, September, 8, 2026',
			'Tuesday, September, 15, 2026',
			'Tuesday, September, 22, 2026',
			'Tuesday, September, 29, 2026',
			'Tuesday, October, 6, 2026',
			'Tuesday, October, 13, 2026',
			'Tuesday, October, 20, 2026',
			'Tuesday, October, 27, 2026',
			'Tuesday, November, 3, 2026',
			'Tuesday, November, 10, 2026',
			'Tuesday, November, 17, 2026',
			'Tuesday, November, 24, 2026',
			'Tuesday, December, 1, 2026',
			'Tuesday, December, 8, 2026'
		],
		class: 'Chair Yoga',
		image: ChairYoga2,
		time: 'Tuesdays - 10:00 - 11:00 am',
		mapLocation: 'wmrc',
		price: '$138.00 (12 weeks)',
		dropInPrice: '$14.70 for ages 54 and under, $11.00 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.',
		link: 'https://anc.ca.apm.activecommunities.com/activewaterloo/activity/search/detail/87912?onlineSiteId=0&from_original_cui=true'
	},
	{
		id: 2,
		classActive: true,
		location: 'Waterloo Memorial Recreation Complex',
		address:
			'Waterloo Memorial Recreation Complex, 101 Father David Bauer Dr, Waterloo, ON N2L 0B4',
		duration: 'September 8th - December 8th 2026',
		weekday: `Next class - ${getNextClassDate([
			'Tuesday, June, 23, 2026',
			'Tuesday, September, 8, 2026',
			'Tuesday, September, 15, 2026',
			'Tuesday, September, 22, 2026',
			'Tuesday, September, 29, 2026',
			'Tuesday, October, 6, 2026',
			'Tuesday, October, 13, 2026',
			'Tuesday, October, 20, 2026',
			'Tuesday, October, 27, 2026',
			'Tuesday, November, 3, 2026',
			'Tuesday, November, 10, 2026',
			'Tuesday, November, 17, 2026',
			'Tuesday, November, 24, 2026',
			'Tuesday, December, 1, 2026',
			'Tuesday, December, 8, 2026'
		])}`,
		dates: [
			'Tuesday, June, 23, 2026',
			'Tuesday, September, 8, 2026',
			'Tuesday, September, 15, 2026',
			'Tuesday, September, 22, 2026',
			'Tuesday, September, 29, 2026',
			'Tuesday, October, 6, 2026',
			'Tuesday, October, 13, 2026',
			'Tuesday, October, 20, 2026',
			'Tuesday, October, 27, 2026',
			'Tuesday, November, 3, 2026',
			'Tuesday, November, 10, 2026',
			'Tuesday, November, 17, 2026',
			'Tuesday, November, 24, 2026',
			'Tuesday, December, 1, 2026',
			'Tuesday, December, 8, 2026'
		],
		class: 'Mat Yoga',
		image: MatYoga7,
		time: 'Tuesdays - 11:15 - 12:15 pm',
		mapLocation: 'wmrc',
		price: '$138.00 (12 weeks)',
		dropInPrice: '$14.70 for ages 54 and under, $11.00 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.',
		link: 'https://anc.ca.apm.activecommunities.com/activewaterloo/activity/search/detail/87925?onlineSiteId=0&from_original_cui=true'
	},
	{
		id: 3,
		classActive: true,
		location: 'RIM Park',
		address: 'RIM Park, 2001 University Ave, Waterloo, ON N2K 4K4',
		duration: 'September 9th - December 9th 2026',
		weekday: `Next class - ${getNextClassDate([
			'Wednesday, June, 24, 2026',
			'Wednesday, September, 9, 2026',
			'Wednesday, September, 16, 2026',
			'Wednesday, September, 23, 2026',
			'Wednesday, September, 30, 2026',
			'Wednesday, October, 7, 2026',
			'Wednesday, October, 14, 2026',
			'Wednesday, October, 21, 2026',
			'Wednesday, October, 28, 2026',
			'Wednesday, November, 4, 2026',
			'Wednesday, November, 11, 2026',
			'Wednesday, November, 18, 2026',
			'Wednesday, November, 25, 2026',
			'Wednesday, December, 2, 2026',
			'Wednesday, December, 9, 2026'
		])}`,
		dates: [
			'Wednesday, June, 24, 2026',
			'Wednesday, September, 9, 2026',
			'Wednesday, September, 16, 2026',
			'Wednesday, September, 23, 2026',
			'Wednesday, September, 30, 2026',
			'Wednesday, October, 7, 2026',
			'Wednesday, October, 14, 2026',
			'Wednesday, October, 21, 2026',
			'Wednesday, October, 28, 2026',
			'Wednesday, November, 4, 2026',
			'Wednesday, November, 11, 2026',
			'Wednesday, November, 18, 2026',
			'Wednesday, November, 25, 2026',
			'Wednesday, December, 2, 2026',
			'Wednesday, December, 9, 2026'
		],
		class: 'Mat Yoga',
		image: MatYoga2,
		time: 'Wednesdays - 9:30 - 10:30 am',
		mapLocation: 'rim',
		price: '$126.50 (11 weeks)',
		dropInPrice: '$14.70 for ages 54 and under, $11.00 for ages 55+',
		additionalInfo:
			'There are 5 drop - in spots available for each class. You may register to drop - in up to 72 hours in advance of the class.',
		link: 'https://anc.ca.apm.activecommunities.com/activewaterloo/activity/search/detail/87926?onlineSiteId=0&from_original_cui=true'
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

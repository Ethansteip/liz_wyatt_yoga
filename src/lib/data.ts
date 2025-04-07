import ChairYoga1 from '$lib/assets/chair-yoga-2.jpg';
import ChairYoga2 from '$lib/assets/chair-yoga-3.png';
import MatYoga1 from '$lib/assets/mat-yoga-1.jpg';
import MatYoga2 from '$lib/assets/mat-yoga-2.jpg';
import MatYoga3 from '$lib/assets/mat-yoga-3.jpg';
import MatYoga5 from '$lib/assets/mat-yoga-5.jpg';
//comment

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
		image: ChairYoga2,
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
		image: MatYoga5,
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

interface CalendarEvent {
	start: string;
	end: string;
	summary: string;
	description: string;
	location: string;
}

export function createCalendarEvent(session: (typeof schedule)[0]): void {
	// Parse the time string (e.g., "9:00 - 10:00 am")
	const [startTime] = session.time.split(' - ');

	// Create Date object from weekday (which already contains the next occurrence)
	const eventDate = new Date(session.weekday);

	// Parse and set the time
	const [hours, minutes] = startTime.split(':');
	let hour = parseInt(hours);
	const minute = parseInt(minutes);

	// Adjust hour for PM times
	if (session.time.toLowerCase().includes('pm') && hour !== 12) {
		hour += 12;
	}
	// Adjust for 12 AM
	if (session.time.toLowerCase().includes('am') && hour === 12) {
		hour = 0;
	}

	eventDate.setHours(hour, minute, 0, 0);

	// Create end time (1 hour later)
	const endDate = new Date(eventDate);
	endDate.setHours(endDate.getHours() + 1);

	const event: CalendarEvent = {
		start: eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
		end: endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
		summary: `${session.class} Yoga`,
		description: yogaDescriptions[session.class as keyof typeof yogaDescriptions],
		location: `${session.location} - ${session.address}`
	};

	downloadICS(event);
}

function downloadICS(event: CalendarEvent): void {
	const icsData = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'BEGIN:VEVENT',
		`DTSTART:${event.start}`,
		`DTEND:${event.end}`,
		`SUMMARY:${event.summary}`,
		`DESCRIPTION:${event.description}`,
		`LOCATION:${event.location}`,
		'END:VEVENT',
		'END:VCALENDAR'
	].join('\n');

	const blob = new Blob([icsData], { type: 'text/calendar' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = `yoga-class.ics`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}

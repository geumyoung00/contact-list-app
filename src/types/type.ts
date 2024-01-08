export interface User {
	login: { uuid: string };
	name: { first: string; last: string };
	phone: string;
	email: string;
	dob: { date: string };
	picture: { thumbnail: string };
}

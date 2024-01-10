export interface User {
	login: { uuid: string };
	name: { first: string; last: string };
	phone: string;
	email: string;
	dob: { date: string };
	picture: { thumbnail: string };
}

export interface UsersContextType {
	users: User[];
	inputHandler: (text: string) => void;
}

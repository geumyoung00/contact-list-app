import React, { useState, createContext, useEffect } from 'react';
import { User } from '../types/type';
import { UsersContextType } from '../types/type';
import axios from 'axios';

export const UsersContext = createContext<UsersContextType>({
	users: [],
	inputHandler: () => {},
});

let initUser: User[] = [];

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		async function fetchUser() {
			try {
				const res = await axios.get(
					'https://randomuser.me/api?format=json&results=10'
				);
				const data = res.data.results;
				setUsers(data);
				initUser = data;
			} catch (error) {
				console.error('error__', error);
			}
		}
		fetchUser();
	}, []);

	const inputHandler = (text: string) => {
		const newUser = initUser.filter(
			user =>
				user.name.first.toLowerCase().includes(text.toLowerCase()) ||
				user.name.last.toLowerCase().includes(text.toLowerCase())
		);
		setUsers(newUser);
	};

	const usersValue = {
		users: users,
		inputHandler: inputHandler,
	};

	return (
		<UsersContext.Provider value={usersValue}>{children}</UsersContext.Provider>
	);
};

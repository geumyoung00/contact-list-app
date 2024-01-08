import './App.css';
import { UsersList } from './comopnents/UsersList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from './types/type';
import { SearchInput } from './comopnents/SearchInput';

let initUser: User[] = [];

function App() {
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

	return (
		<div className='App'>
			<h1>Contact list</h1>
			<SearchInput inputHandler={inputHandler} />
			<UsersList users={users} />
		</div>
	);
}

export default App;

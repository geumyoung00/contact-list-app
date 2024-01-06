import './App.css';
import { UsersList } from './comopnents/UsersList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState<[]>([]);

	useEffect(() => {
		async function fetchUser() {
			try {
				const res = await axios.get(
					'https://randomuser.me/api?format=json&results=10'
				);
				const data = res.data.results;
				setUsers(data);
			} catch (error) {
				console.error('error__', error);
			}
		}
		fetchUser();
	}, []);

	return (
		<div className='App'>
			<h1>Contact list</h1>
			<UsersList users={users} />
		</div>
	);
}

export default App;

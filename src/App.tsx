import './App.css';
import { UsersList } from './comopnents/UsersList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		try {
			const res = axios.get('https://randomuser.me/api?format=json&results=10');
			console.log('response__', res);
		} catch (error) {
			console.error('error__', error);
		}
	}, []);

	return (
		<div className='App'>
			<h1>Contact list</h1>
			<UsersList />
		</div>
	);
}

export default App;

import './App.css';
import { UsersList } from './comopnents/UsersList';
import { SearchInput } from './comopnents/SearchInput';
import { UsersProvider } from './store/user-context';

function App() {
	return (
		<UsersProvider>
			<div className='App'>
				<h1>Contact list</h1>
				<SearchInput />
				<UsersList />
			</div>
		</UsersProvider>
	);
}

export default App;

import classes from './User.module.css';
import { UserItem } from './UserItem';
import { useContext } from 'react';
import { UsersContext } from '../store/user-context';

export const UsersList = () => {
	const usersCtx = useContext(UsersContext);

	return (
		<ul className={classes.lists}>
			{usersCtx.users.map(item => {
				return <UserItem user={item} key={item.login.uuid} />;
			})}
		</ul>
	);
};

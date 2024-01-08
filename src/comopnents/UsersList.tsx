import classes from './User.module.css';
import { UserItem } from './UserItem';
import { User } from '../types/type';

export const UsersList = ({ users }: { users: User[] }) => {
	return (
		<ul className={classes.lists}>
			{users.map(item => {
				return <UserItem user={item} key={item.login.uuid} />;
			})}
		</ul>
	);
};

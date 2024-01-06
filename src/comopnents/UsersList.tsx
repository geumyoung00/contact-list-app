import classes from './User.module.css';
import { UserItem } from './UserItem';
import { user } from '../types/type';

export const UsersList = ({ users }: { users: user[] }) => {
	return (
		<ul className={classes.lists}>
			{users.map(item => {
				return <UserItem user={item} key={item.login.uuid} />;
			})}
		</ul>
	);
};

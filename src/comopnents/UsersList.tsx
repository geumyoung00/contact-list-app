import classes from './User.module.css';
import { UserItem } from './UserItem';

export const UsersList = () => {
	return (
		<ul className={classes.lists}>
			<UserItem />
		</ul>
	);
};

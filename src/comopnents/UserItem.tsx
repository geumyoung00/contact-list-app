import classes from './User.module.css';
import { User } from '../types/type';

export const UserItem = ({ user }: { user: User }) => {
	const dob = new Date(user.dob.date);
	const birthMonth = new Intl.DateTimeFormat('en-US', {
		month: 'short',
	}).format(dob);
	const birthDate = dob.getDate();
	const imgUrl = user.picture.thumbnail;

	return (
		<li className={classes.userBox}>
			<div className={classes.profileImg}>
				<img
					src={imgUrl}
					alt={`${user.name.first} ${user.name.last}'s profile`}
				/>
			</div>
			<dl className={classes.userInfo}>
				<dd
					className={classes.userName}
				>{`${user.name.first} ${user.name.last}`}</dd>
				<dd>{`${birthMonth} ${birthDate}`}</dd>
				<dd>{user.phone}</dd>
				<dd>{user.email}</dd>
			</dl>
		</li>
	);
};

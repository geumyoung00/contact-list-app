import classes from './User.module.css';
import { user } from '../types/type';

export const UserItem = ({ user }: { user: user }) => {
	let dob = new Date(user.dob.date);
	let month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dob);
	let date = dob.getDate();

	const imgUrl = user.picture.thumbnail;
	console.log(imgUrl);

	return (
		<li className={classes.userBox}>
			<div className={classes.profileImg}>
				<img
					src={imgUrl}
					alt={`${user.name.first} ${user.name.last}의 프로필 이미지`}
				/>
			</div>
			<dl className={classes.userInfo}>
				<dd
					className={classes.userName}
				>{`${user.name.first} ${user.name.last}`}</dd>
				<dd>{`${month} ${date}`}</dd>
				<dd>{user.phone}</dd>
				<dd>{user.email}</dd>
			</dl>
		</li>
	);
};

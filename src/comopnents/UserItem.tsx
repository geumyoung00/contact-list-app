import classes from './User.module.css';

export const UserItem = () => {
	return (
		<li className={classes.userBox}>
			<div className={classes.profileImg}>이미지</div>
			<dl className={classes.userInfo}>
				<dd className={classes.userName}>사용자 이름</dd>
				<dd>생일</dd>
				<dd>휴대전화번호</dd>
				<dd>이메일 주소</dd>
			</dl>
		</li>
	);
};

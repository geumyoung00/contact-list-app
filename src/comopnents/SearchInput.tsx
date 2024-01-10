import React, { useContext } from 'react';
import { UsersContext } from '../store/user-context';
import classes from './Form.module.css';

export const SearchInput = () => {
	const usersCtx = useContext(UsersContext);

	// const inputChange = (e: React.ChangeEvent) => {
	// 	const target = e.target as HTMLFormElement;

	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		usersCtx.inputHandler(text);
	};

	return (
		<form className={classes.form}>
			<input
				onChange={inputChange}
				className={classes.inputText}
				type='text'
				name='searchName'
			/>
		</form>
	);
};

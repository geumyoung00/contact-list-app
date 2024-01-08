import React from 'react';
import classes from './Form.module.css';

export const SearchInput = ({
	inputHandler,
}: {
	inputHandler: (text: string) => void;
}) => {
	const inputChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLFormElement;
		const text = target.value;
		inputHandler(text);
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

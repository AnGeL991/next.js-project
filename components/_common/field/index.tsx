import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FC, HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import TextField from '@mui/material/TextField';

import styles from './field.module.scss';

interface FieldProps {
	keyName: string;
	displayName: string;
	register: UseFormRegister<any>;
	errors?: { [key: string]: any };
	isFormDisabled?: boolean;
	type?: HTMLInputTypeAttribute;
	className?: string;
	fileName?: string;
	watch: UseFormWatch<any>;
}

export const Field: FC<FieldProps> = ({ displayName, keyName, isFormDisabled, register, errors = {}, type = 'text', className = '', watch }) => {
	if (type === 'file') {
		const fileName = watch(keyName) ? watch(keyName)[0]?.name : 'Ups coś poszło nie tak';
		return (
			<div className={classNames(styles.formGroup, styles.fileArea)}>
				<input className={styles.fileInput} type={type} required {...register(keyName)} />
				<div className={classNames(styles.fileDummy, { [styles.error]: errors[keyName] })}>
					<div className={styles.success}>{fileName}</div>
					<div className={styles.default}>Wybierz plik CV</div>
				</div>
			</div>
		);
	}

	return (
		<TextField
			className={classNames(styles.textField, { [className]: className })}
			id={displayName}
			label={displayName}
			type={type}
			variant="outlined"
			placeholder={isFormDisabled ? undefined : displayName}
			disabled={isFormDisabled}
			error={errors[keyName]}
			helperText={errors[keyName]?.message}
			{...register(keyName)}
		/>
	);
};

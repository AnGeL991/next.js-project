import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

import styles from './checkbox-field.module.scss';

interface CheckboxFieldProps {
	displayName: string;
	keyName: string;
	register: UseFormRegister<any>;
	errors?: { [key: string]: any };
}

export const CheckboxField: FC<CheckboxFieldProps> = ({ displayName, keyName, register, errors = {} }) => {
	return (
		<>
			<FormControlLabel className={styles.label} control={<Checkbox className={styles.checkbox} {...register(keyName)} />} label={displayName} />
			{errors[keyName] && <p className={styles.error}>{errors[keyName]?.message}</p>}
		</>
	);
};

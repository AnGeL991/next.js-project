import { FC } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { Button, Field, CheckboxField } from '@/components/_common';

import { ButtonType, ButtonVariant } from '@/components/_common/button/types';

import styles from './form.module.scss';

import { FieldProps } from '@/components/form/types';

interface FormProps {
	onSubmit: () => void;
	fields: FieldProps[];
}

export const Form: FC<FormProps> = ({ onSubmit, fields = [] }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useFormContext();

	const displayFields = fields.map((field) => {
		if (field.checkbox) {
			return <CheckboxField key={field.keyName} {...field} register={register} />;
		} else {
			return (
				<Field
					key={field.keyName}
					{...field}
					register={register}
					errors={errors}
					className={classNames(styles.field, { [styles.halfSize]: field.halfSize })}
					watch={watch}
				/>
			);
		}
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			{displayFields}
			<div className={styles.buttonBox}>
				<Button className={styles.btn} variant={ButtonVariant.Contained} type={ButtonType.Submit}>
					Wyślij Cv
				</Button>
			</div>
		</form>
	);
};

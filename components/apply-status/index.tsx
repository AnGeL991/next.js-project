import { FC } from 'react';
import styles from './apply-status.module.scss';
import { ButtonVariant } from '../_common/button/types';
import { Button } from '@/components/_common';
import classNames from 'classnames';

interface ApplyStatus {
	status: 'error' | 'success';
	title: string;
	subText: string;
	buttonText: string;
	onClick: () => void;
}

export const ApplyStatus: FC<ApplyStatus> = ({ status, title, subText, buttonText, onClick }) => {
	return (
		<div className={classNames(styles.success, { [styles[status]]: status })}>
			<h3 className={styles.title}>{title}</h3>
			<span>{subText}</span>
			<Button className={styles.btn} variant={ButtonVariant.Contained} onClick={onClick}>
				{buttonText}
			</Button>
		</div>
	);
};

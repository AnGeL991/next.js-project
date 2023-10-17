import { FC } from 'react';
import { IconType } from 'react-icons';
import classNames from 'classnames';
import styles from './detail-icon.module.scss';

interface DetailIconProps {
	Icon: IconType;
	text: string;
	className?: string;
}

export const DetailIcon: FC<DetailIconProps> = ({ Icon, text, className = '' }) => {
	return (
		<span className={styles.detailIcon}>
			<Icon className={classNames(styles.icon, { [className]: className })} /> {text}
		</span>
	);
};

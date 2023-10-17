import { FC } from 'react';

import styles from './detail-item.module.scss';

interface DetailItemProps {
	text: string;
}

export const DetailItem: FC<DetailItemProps> = ({ text }) => {
	return <div className={styles.detailItem}>{text}</div>;
};

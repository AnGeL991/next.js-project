import { FC } from 'react';
import styles from './offer-count.module.scss';

interface OfferCountProps {
	count: number;
}

export const OfferCount: FC<OfferCountProps> = ({ count }) => {
	return (
		<div className={styles.countBox}>
			<span>
				<span className={styles.count}>{count}</span> Ofert pracy
			</span>
		</div>
	);
};

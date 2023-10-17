import { FC } from 'react';

import { ApplyPanel, DetailPanel, MoreOfferPanel } from '@/components';

import styles from './offer-details.module.scss';
import { Offer } from '../types/offer.interface';

interface OfferDetails {
	details: Offer;
	similarOffer: Offer[];
}

export const OfferDetails: FC<OfferDetails> = ({ details, similarOffer = [] }) => {
	return (
		<article className={styles.offerDetails}>
			<div className={styles.wrapper}>
				<DetailPanel {...details} />
				<div>
					<ApplyPanel />
					<MoreOfferPanel listOffer={similarOffer} />
				</div>
			</div>
		</article>
	);
};

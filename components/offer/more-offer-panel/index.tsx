import { SimilarOffer, Wrapper } from '@/components';

import styles from './more-offer.module.scss';
import { Offer } from '../types/offer.interface';
import { FC } from 'react';

interface MoreOfferPanel {
	listOffer: Offer[];
}

export const MoreOfferPanel: FC<MoreOfferPanel> = ({ listOffer = [] }) => {
	const displaySimilarOffer = listOffer.map((offer) => <SimilarOffer key={offer.id} {...offer} />);

	if (!displaySimilarOffer.length) {
		return (
			<Wrapper className={styles.forYou} header="Oferty wybrane dla ciebie">
				<div className={styles.empty}>
					<strong>Ups!!!</strong>
					Nie posiadamy podobnych ofert
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper className={styles.forYou} header="Oferty wybrane dla ciebie">
			{displaySimilarOffer}
		</Wrapper>
	);
};

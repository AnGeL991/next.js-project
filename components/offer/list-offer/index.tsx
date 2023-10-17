import { FC } from 'react';

import { EachOffer, OfferCount } from '@/components';
import Pagination from '@mui/material/Pagination';
import styles from './list-offer.module.scss';
import { Offer } from '../types/offer.interface';

interface ListOfferProps {
	listOffer: Offer[];
	count: number;
	currentPage: number;
	onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const ListOffer: FC<ListOfferProps> = ({ listOffer = [], count = 0, currentPage, onChange }) => {
	const displayOffer = listOffer.map((offer) => <EachOffer key={offer.id} {...offer} />);

	const pageAmount = count / 10;

	return (
		<article className={styles.wrapper}>
			<div className={styles.listOffer}>
				<header className={styles.header}>
					<OfferCount count={count} />
				</header>
				<div className={styles.list}>{displayOffer}</div>
				<Pagination count={pageAmount} showFirstButton showLastButton page={currentPage} onChange={onChange} />
			</div>
		</article>
	);
};

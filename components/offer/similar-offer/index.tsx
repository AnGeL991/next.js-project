import { FC } from 'react';
import { useRouter } from 'next/router';
import { CiLocationOn } from 'react-icons/ci';
import { PiMoney } from 'react-icons/pi';
import { LiaIndustrySolid } from 'react-icons/lia';

import { DetailIcon } from '@/components/_common';
import { Offer } from '@/components/offer/types/offer.interface';

import styles from './similar-offer.module.scss';

export const SimilarOffer: FC<Offer> = ({ id, title, company, location, location_state, salary, salary_currency, department }) => {
	const router = useRouter();

	const handleOpenDetails = () => {
		router.push(`/${id}`);
	};
	return (
		<div className={styles.similarOffer} onClick={handleOpenDetails}>
			<div>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.company}>{company}</span>
			</div>
			<div className={styles.details}>
				<DetailIcon className={styles.icon} Icon={CiLocationOn} text={`${location} ${location_state}`} />
				<DetailIcon className={styles.icon} Icon={PiMoney} text={`${salary} ${salary_currency}`} />
				<DetailIcon className={styles.icon} Icon={LiaIndustrySolid} text={department} />
			</div>
		</div>
	);
};

import { FC } from 'react';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { useRouter } from 'next/router';
import Logo from '@/assets/images/logo.jpg';
import { DetailIcon, DetailItem } from '@/components/_common';
import { dateConverter } from '@/utils';
import styles from './each-offer.module.scss';

import { Offer } from '@/components/offer/types/offer.interface';

export const EachOffer: FC<Offer> = ({ id, title, company, created_at, salary, location, location_state, department, salary_currency = '' }) => {
	const router = useRouter();

	const handleOpenDetails = () => {
		router.push(`/${id}`);
	};

	return (
		<div className={styles.eachOffer} onClick={handleOpenDetails}>
			<div className={styles.logo}>
				<Image src={Logo} width={150} height={150} alt="company logo" />
			</div>
			<div className={styles.details}>
				<div className={styles.detailsInfo}>
					<div>
						<h3 className={styles.title}>{title}</h3>
						<span className={styles.company}>{company}</span>
					</div>
					<div className={styles.salaryDetails}>
						<span className={styles.date}>{dateConverter(created_at)}</span>
						<span className={styles.salary}>
							{salary} {salary_currency.toLowerCase()}
						</span>
					</div>
				</div>
				<div className={styles.detailsTopic}>
					<div className={styles.detailsIcon}>
						<DetailIcon Icon={CiLocationOn} text={`${location}, ${location_state}`} />
					</div>
					<div className={styles.detailsItem}>
						<DetailItem text={department} /> <DetailItem text={salary_currency} />
					</div>
				</div>
			</div>
		</div>
	);
};

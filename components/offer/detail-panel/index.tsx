import { FC } from 'react';

import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineClockCircle, AiOutlineShareAlt } from 'react-icons/ai';
import classNames from 'classnames';

import { Wrapper } from '@/components';
import { DetailIcon } from '@/components/_common';
import { Offer } from '@/components/offer/types/offer.interface';
import Logo from '@/assets/images/logo.jpg';

import styles from './detail-panel.module.scss';
import { dateConverter } from '@/utils';

export const DetailPanel: FC<Offer> = ({ title, company, salary, location, location_state, salary_currency = '', created_at, description }) => {
	return (
		<Wrapper className={styles.details} wrapperClassName={styles.wrapper}>
			<div className={styles.detailsInfo}>
				<div>
					<Image src={Logo} width={150} height={100} alt="company image" />
				</div>
				<div className={styles.info}>
					<div>
						<h3 className={styles.title}>{title}</h3>
						<span className={styles.company}>{company}</span>
					</div>
					<DetailIcon Icon={CiLocationOn} text={`${location} ${location_state}`} />
				</div>
				<div className={styles.rightInfo}>
					<AiOutlineShareAlt className={styles.share} />
					<span className={styles.salary}>
						Wynagrodzenie: 
						<strong>
							{salary} {salary_currency.toLowerCase()}
						</strong>
					</span>
				</div>
			</div>
			<div className={classNames(styles.date, styles.borderRight)}>
				<AiOutlineClockCircle className={styles.icon} /> Oferta opublikowana: <span>{dateConverter(created_at)}</span>
			</div>
			<div className={styles.date}>
				<AiOutlineClockCircle className={styles.icon} /> Oferta wygasa: <span>-</span>
			</div>
			<div className={styles.description}>
				<header className={styles.header}>Opis stanowiska</header>
				{description}
			</div>
		</Wrapper>
	);
};

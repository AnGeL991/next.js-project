import { FC, ChangeEvent } from 'react';

import { Search, AddEmployee } from '@/components';

import styles from './banner.module.scss';

interface BannerProps {
	search: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Banner: FC<BannerProps> = ({ search, onChange }) => {
	return (
		<section className={styles.banner}>
			<header className={styles.header}>Szukaj spośród 500.000 ofert pracy i rób w życiu to co kochasz</header>
			<Search search={search} onChange={onChange} />
			<AddEmployee />
		</section>
	);
};

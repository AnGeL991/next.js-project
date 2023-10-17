import { FC, ChangeEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

import { Button } from '@/components/_common';
import { ButtonVariant } from '@/components/_common/button/types';

import styles from './search.module.scss';

interface SearchProps {
	search: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ search, onChange }) => {
	const router = useRouter();

	const handleSubmitSearch = () => {
		router.push(`/?search=${search}`);
	};

	return (
		<div className={styles.search}>
			<input className={styles.input} value={search} onChange={onChange} placeholder="Wpisz słowo kluczowe, stanowisko, firma itp" />
			<Button className={styles.button} variant={ButtonVariant.Contained} onClick={handleSubmitSearch}>
				<AiOutlineSearch className={styles.icon} />
			</Button>
		</div>
	);
};

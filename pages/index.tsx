import { Banner, ListOffer } from '@/components';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

export default function HomePage({ count, listOffer }: any) {
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
		router.push(`/?page=${value}`);
		setCurrentPage(value);
	};

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearch(value);
	};

	return (
		<>
			<Banner search={search} onChange={handleChangeSearch} />
			<ListOffer listOffer={listOffer} count={count} onChange={handleChangePage} currentPage={currentPage} />
		</>
	);
}

export const getServerSideProps = async ({ query: { page = '1', limit = '10', search = '' } }) => {
	const res = await fetch(`https://6082be765dbd2c001757a628.mockapi.io/api/v1/jobs?page=${page}&limit=${limit}&search=${search}`);
	const data = await res.json();

	return {
		props: {
			count: data.count,
			listOffer: data.items,
		},
	};
};

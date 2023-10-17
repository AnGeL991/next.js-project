import { FC } from 'react';

import { NavbarItem } from '@/components';

import { NavbarItemProps } from '@/components/layout/navbar/_common/types';

import styles from './navbar-list.module.scss';

const list: NavbarItemProps[] = [
	{ text: 'Oferty pracy', path: '/' },
	{ text: 'Opinie o pracodawcach', path: '/' },
	{ text: 'Pracuj z nami', path: '/' },
	{ text: 'O nas', path: '/' },
	{ text: 'Kontakt', path: '/' },
];

export const NavbarList: FC = () => {
	const menu = list.map(({ path, text }) => <NavbarItem key={text} path={path} text={text} />);

	return <div className={styles.navbarList}>{menu}</div>;
};

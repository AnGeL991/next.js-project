import { FC } from 'react';
import Link from 'next/link';

import { NavbarItemProps } from '@/components/layout/navbar/_common/types';

import styles from './navbar-item.module.scss';

export const NavbarItem: FC<NavbarItemProps> = ({ text, path }) => {
	return (
		<li className={styles.navbarItem}>
			<Link href={path}>{text}</Link>
		</li>
	);
};

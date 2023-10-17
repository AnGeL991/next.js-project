import { ReactFCC } from '@/react';

import { Logo, NavbarList } from '@/components';
import { Button } from '@/components/_common';
import { ButtonVariant } from '@/components/_common/button/types';

import styles from './navbar.module.scss';

export const Navbar: ReactFCC = () => {
	return (
		<div className={styles.navbar}>
			<Logo />
			<header className={styles.menu}>
				<NavbarList />
				<div className={styles.action}>
					<Button variant={ButtonVariant.Text}>Wyślij cv</Button>
					<Button variant={ButtonVariant.Outlined}>Zaloguj się</Button>
				</div>
			</header>
		</div>
	);
};

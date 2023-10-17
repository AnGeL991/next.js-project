import React from 'react';
import { ReactFCC } from '@/react';

import { Navbar, Footer, Newsletter } from '@/components';

import styles from './layout.module.scss';

export const Layout: ReactFCC = ({ children }) => {
	return (
		<main data-theme="light" className={styles.layout}>
			<Navbar />
			<section className={styles.body}>{children}</section>
			<Newsletter />
			<Footer />
		</main>
	);
};

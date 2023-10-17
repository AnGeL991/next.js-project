import { FC } from 'react';
import GotItLogo from '@/assets/images/logo.jpg';
import Image from 'next/image';

import styles from './logo.module.scss';

export const Logo: FC = () => {
	return <Image className={styles.logo} src={GotItLogo} width={100} height={60} alt="GotIt" />;
};

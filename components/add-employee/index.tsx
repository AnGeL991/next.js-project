import { FC } from 'react';
import { BsBinoculars } from 'react-icons/bs';

import styles from './add-employee.module.scss';

export const AddEmployee: FC = () => {
	return (
		<div className={styles.addEmployee}>
			<BsBinoculars className={styles.icon} />
			<div className={styles.description}>
				<h3>Szukasz pracownika?</h3>
				<span>Skorzystaj z bazy ponad 100,000 ludzi poszukujących pracy</span>
			</div>
			<div className={styles.addOffer}>Dodaj ofertę +</div>
		</div>
	);
};

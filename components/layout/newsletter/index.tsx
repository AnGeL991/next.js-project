import { FC } from 'react';

import { Button } from '@/components/_common';
import styles from './newsletter.module.scss';
import { TbBellRinging2 } from 'react-icons/tb';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {  ButtonVariant } from '@/components/_common/button/types';

export const Newsletter: FC = () => {
	return (
		<div className={styles.newsletter}>
			<TbBellRinging2 className={styles.icon} />
			<div>
				<p className={styles.text}>Śledź nowe oferty pracy w twoim rejonie</p>
				<span className={styles.subText}>Otrzymuj powiadomienia mailowe o nowych ofertach w twojej specjalizacji</span>
			</div>
			<div className={styles.send}>
				<input className={styles.input} placeholder="Podaj adres e-mail" />
				<Button className={styles.button} variant={ButtonVariant.Contained}>
					<AiOutlineArrowRight className={styles.icon} />
				</Button>
			</div>
		</div>
	);
};

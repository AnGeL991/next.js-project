import { useState } from 'react';
import { RiMailSendFill } from 'react-icons/ri';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { applySchema } from '@/yup';

import { Form, Modal, Wrapper, ApplyStatus } from '@/components';
import { Button } from '@/components/_common';
import { ButtonVariant } from '@/components/_common/button/types';
import { applyFields } from '@/components/form/schema/applyFields';

import styles from './apply-panel.module.scss';

export const ApplyPanel = () => {
	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState<'success' | 'error' | ''>('');
	const methods = useForm({
		resolver: yupResolver(applySchema),
	});

	const handleToggleModal = () => {
		setOpen((prev) => !prev);
		setStatus('');
	};

	const handleBackToApplication = () => {
		setStatus('');
	};

	const onSubmit = async (data: any) => {
		const apply = {
			email: data.email,
			first_name: data.name,
			last_name: data.surname,
			phone: data.phone,
			cv_file_id: data.cv[0].name,
		};
		const response = await fetch('', { method: 'post', body: JSON.stringify(apply) });

		if (!response.ok) {
			setStatus('error');
			return;
		}
		setStatus('success');
		methods.reset();
	};

	return (
		<>
			<Wrapper className={styles.apply}>
				<Button variant={ButtonVariant.Contained} className={styles.btn} onClick={handleToggleModal}>
					Aplikuj
				</Button>
				<Button variant={ButtonVariant.Contained} className={styles.btn}>
					Dodaj do porównania
				</Button>
				<span className={styles.notice}>
					<RiMailSendFill className={styles.icon} />
					Powiadom mnie o podobnej ofercie
				</span>
			</Wrapper>
			<Modal open={open} handleClose={handleToggleModal} header="Dołącz do nas">
				<FormProvider {...methods}>
					<Form onSubmit={methods.handleSubmit(onSubmit)} fields={applyFields} />
				</FormProvider>
				{status === 'success' && (
					<ApplyStatus status="success" title="Sukces!!" subText="Twoje aplikacja została wysłana" buttonText="Zamknij" onClick={handleToggleModal} />
				)}
				{status === 'error' && (
					<ApplyStatus
						status="error"
						title="Ups!!"
						subText="Niestety nie udało nam się wysłać twojego aplikacji"
						buttonText="Wróć do aplikacji"
						onClick={handleBackToApplication}
					/>
				)}
			</Modal>
		</>
	);
};

import { ReactFCC } from '@/react';
import MuiModal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './modal.module.scss';

interface ModalProps {
	open: boolean;
	handleClose: () => void;
	header?: string;
}

export const Modal: ReactFCC<ModalProps> = ({ children, open, handleClose, header }) => {
	return (
		<MuiModal open={open} onClose={handleClose}>
			<div className={styles.modal}>
				{header && (
					<header className={styles.header}>
						{header}
						<span onClick={handleClose}>
							<AiOutlineClose className={styles.icon} />
						</span>
					</header>
				)}
				<div className={styles.body}>{children}</div>
			</div>
		</MuiModal>
	);
};

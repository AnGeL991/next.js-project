import { ReactFCC } from '@/react';
import classnames from 'classnames';
import MuiButton from '@mui/material/Button';
import { ButtonSize, ButtonType, ButtonVariant } from './types';

import styles from './button.module.scss';

interface ButtonProps {
	className?: string;
	variant?: ButtonVariant;
	onClick?: () => void;
	size?: ButtonSize;
	type?: ButtonType;
}

export const Button: ReactFCC<ButtonProps> = ({
	children,
	className = '',
	type = ButtonType.Button,
	size = ButtonSize.Medium,
	variant = ButtonVariant.Text,
	onClick,
}) => {
	return (
		<MuiButton type={type} className={classnames(styles.button, { [className]: className })} size={size} variant={variant} onClick={onClick}>
			{children}
		</MuiButton>
	);
};

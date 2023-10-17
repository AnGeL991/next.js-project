import { ReactFCC } from '@/react';
import classnames from 'classnames';
import styles from './wrapper.module.scss';

interface WrapperProps {
	header?: string;
	wrapperClassName?: string;
	className?: string;
}

export const Wrapper: ReactFCC<WrapperProps> = ({ children, className = '', wrapperClassName = '', header }) => {
	return (
		<div className={classnames(styles.wrapper, { [wrapperClassName]: wrapperClassName })}>
			{header && <header className={styles.header}>{header}</header>}
			<div className={className}>{children}</div>
		</div>
	);
};

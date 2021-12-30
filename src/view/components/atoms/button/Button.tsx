import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<button tabIndex={0} className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	);
};

export default Button;

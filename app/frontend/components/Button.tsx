import React from 'react';

type PropsT = {
	children: React.ReactNode;
	onClick: (...arg: any) => void;
	isActive: boolean;
};

export const Button: React.FC<PropsT> = ({ children, onClick, isActive }) => {
	return (
		<button
			className={`cursor-pointer px-2 py-1 active:bg-accent-light
                 ${
						isActive
							? 'bg-accent-light dark:bg-accent-dark'
							: `bg-primary-light dark:bg-primary-dark
                                hover:bg-secondary-light dark:hover:bg-secondary-dark`
					}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

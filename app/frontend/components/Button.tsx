import React from 'react';

type PropsT = {
	children: React.ReactNode;
	onClick: (...arg: any) => void;
};

export const Button: React.FC<PropsT> = ({ children, onClick }) => {
	return (
		<button
			className='bg-primary-light cursor-pointer px-2 py-1
            dark:bg-primary-dark active:bg-accent-light
            hover:bg-secondary-light dark:hover:bg-secondary-dark'
			onClick={onClick}
		>
			{children}
		</button>
	);
};

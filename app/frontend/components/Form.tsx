import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { StatusT } from '../types';

type PropsT = {
	handleSubmit: (
		event: React.FormEvent<HTMLFormElement>,
		username: string
	) => Promise<void>;
	status: StatusT;
};

export const Form: React.FC<PropsT> = ({ handleSubmit, status }) => {
	const [username, setUsername] = useState<string>('');

	const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSubmit;
		}
	};

	const borderColor = {
		success: 'border-lime-400',
		error: 'border-red-400',
		loading: 'border-sky-400',
	};

	return (
		<form
			onSubmit={(e) => handleSubmit(e, username)}
			className={`flex flex-col gap-3 max-w-lg mx-auto my-12 relative
            overflow-hidden rounded-lg border ${
				status ? borderColor[status] : ''
			}`}
		>
			<input
				name='username'
				placeholder='Enter github username'
				type='text'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				onKeyUp={submitOnEnter}
				className='rounded-lg bg-white py-2 pl-2 pr-12 text-primary-dark'
			/>
			<button
				type='submit'
				className={`absolute right-0 bg-accent-light p-2 cursor-pointer
                hover:bg-blend-darken transition-colors hover:bg-sky-500 ${
					!username ? 'active:bg-accent-dark' : 'active:bg-sky-600'
				}`}
			>
				<MagnifyingGlassIcon size={24} />
			</button>
		</form>
	);
};

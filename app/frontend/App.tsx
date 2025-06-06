import React, { ReactElement, useState } from 'react';
import { DevStats, Form } from './components';
import { setPreferedColorScheme } from './helpers';
import { useApi } from './helpers/useApi';

export const App: React.FC = () => {
	setPreferedColorScheme();
	const [response, setResponse] = useState<any>();

	const { postData, status } = useApi();

	async function handleSubmit(
		event: React.FormEvent<HTMLFormElement>,
		username: string
	) {
		event.preventDefault();
		if (!username) return;
		setResponse(null);
		const res = await postData(username);
		setResponse(res);
	}

	const renderByStatus: Record<string, ReactElement> = {
		success: <DevStats stats={response} />,
		error: <p className='text-center'>{response?.message ?? ''}</p>,
		loading: <p className='animate-bounce text-center'>loading</p>,
	};

	return (
		<div className='min-h-svh w-svw p-8'>
			<h1 className='text-center'>Dev stats</h1>
			<Form handleSubmit={handleSubmit} status={status} />
			{status && response && renderByStatus[status]}
		</div>
	);
};

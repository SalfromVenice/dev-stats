import { useState } from 'react';
import { StatusT } from '../types';

export const useApi = () => {
	const [status, setStatus] = useState<StatusT>(null);

	const csrfToken = document
		.querySelector('meta[name="csrf-token"]')
		?.getAttribute('content');

	const postData = async (username: string) => {
		setStatus('loading');
		try {
			const response = await fetch('/dev_stats', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-CSRF-Token': csrfToken || '',
				},
				body: JSON.stringify({ username }),
			});
			const res = await response.json();
			if (res.errors) {
				setStatus('error');
				return res.errors[0];
			}
			setStatus('success');
			return res;
		} catch (error) {
			console.warn(error);
		}
	};

	return {
		postData,
		status,
	};
};

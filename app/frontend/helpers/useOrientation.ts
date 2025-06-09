import { useEffect, useState } from 'react';

export function useOrientation() {
	const [orientation, setOrientation] = useState(
		window.matchMedia('(orientation: landscape)').matches
			? 'landscape'
			: 'portrait'
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(orientation: landscape)');
		const handler = (e) => {
			setOrientation(e.matches ? 'landscape' : 'portrait');
		};
		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	}, []);

	return orientation;
}

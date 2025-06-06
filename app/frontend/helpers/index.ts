export const setPreferedColorScheme = () => {
	const html = document.getElementsByTagName('html')[0];
	if (
		window.matchMedia('(prefers-color-scheme: dark)').matches &&
		!html.classList.contains('dark')
	) {
		document.documentElement.classList.add('dark');
	}
};

export const isDarkTheme = () => {
	const html = document.getElementsByTagName('html')[0];

	return html.classList.toString() === 'dark';
};

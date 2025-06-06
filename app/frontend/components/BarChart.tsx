import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { isDarkTheme } from '../helpers';

Chart.register(...registerables);

type PropsT = {
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string;
		borderRadius: 12;
	}[];
	className?: string;
};

export const BarChart: React.FC<PropsT> = ({ datasets, className }) => {
	const options = {
		indexAxis: 'x' as 'x' | 'y',
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: 'bottom' as 'top' | 'right' | 'bottom',
				labels: {
					color: isDarkTheme() ? '#cbd5e1' : '#64748b',
				},
			},
			title: {
				display: true,
				color: isDarkTheme() ? '#cbd5e1' : '#64748b',
			},
		},
		scales: {
			x: {
				stacked: false,
				grid: {
					color: isDarkTheme() ? '#64748b' : '#cbd5e1',
				},
				ticks: {
					color: isDarkTheme() ? '#cbd5e1' : '#64748b',
				},
			},
			y: {
				stacked: false,
				grid: {
					color: isDarkTheme() ? '#64748b' : '#cbd5e1',
				},
				ticks: {
					color: isDarkTheme() ? '#cbd5e1' : '#64748b',
				},
			},
		},
	};

	return (
		<Bar
			className={className}
			options={options}
			data={{
				labels: [''],
				datasets: datasets,
			}}
		/>
	);
};

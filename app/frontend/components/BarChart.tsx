import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { isDarkTheme, isMobile } from '../helpers';
import { useOrientation } from '../helpers/useOrientation';

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
	const orientation = useOrientation();

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

	if (isMobile() && orientation === 'portrait')
		return (
			<div>
				<p className='text-center'>
					This chart is best viewed in landscape mode.
				</p>
				<p className='text-center'>Please rotate your device.</p>
			</div>
		);

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

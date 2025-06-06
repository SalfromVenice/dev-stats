import { ArcElement, Chart, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { isDarkTheme } from '../helpers';

Chart.register(ArcElement, Tooltip);

type PropsT = {
	labels: string[];
	dataset: number[];
	palette: string[];
};

export const PieChart: React.FC<PropsT> = ({ labels, dataset, palette }) => {
	const options = {
		plugins: {
			legend: {
				display: true,
				position: 'right' as
					| 'right'
					| 'left'
					| 'top'
					| 'bottom'
					| 'center'
					| 'chartArea'
					| undefined,
				labels: { color: isDarkTheme() ? '#cbd5e1' : '#64748b' },
			},
		},
		borderRadius: 8,
		borderWidth: 3,
		cutout: '50%',
		hoverOffset: 7,
		spacing: 10,
	};

	return (
		<div className='aspect-square max-w-sm mx-auto col-span-full'>
			<Doughnut
				className='aspect-square animate-fade-in-slide-left'
				data={{
					labels: labels,
					datasets: [
						{
							label: '',
							data: dataset,
							backgroundColor: palette.map(
								(color) => color + 'BF'
							),
							borderColor: palette,
						},
					],
				}}
				options={options}
			/>
		</div>
	);
};

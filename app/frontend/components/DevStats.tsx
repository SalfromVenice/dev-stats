import { ChartBarIcon, ChartPieSliceIcon } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { BarChart } from './BarChart';
import { Button } from './Button';
import { PieChart } from './PieChart';

type PropsT = {
	stats: {
		username: string;
		avatar: string;
		repos: number;
		stats: {
			name: string;
			color: string;
			size: number;
		}[];
	};
};

export const DevStats: React.FC<PropsT> = ({ stats }) => {
	const [index, setIndex] = useState<number>(0);

	const graph = [
		<BarChart
			className='col-span-full animate-fade-in-slide-left'
			datasets={stats.stats.map((lang) => ({
				label: lang.name,
				data: [lang.size],
				backgroundColor: lang.color + 'BF',
				borderRadius: 12,
				borderWidth: 4,
				borderColor: lang.color,
			}))}
		/>,
		<PieChart
			labels={stats.stats.map((lang) => lang.name)}
			dataset={stats.stats.map((lang) => lang.size)}
			palette={stats.stats.map((lang) => lang.color)}
		/>,
	];

	return stats ? (
		<div className='grid md:grid-cols-[auto_1fr] gap-8 mx-auto max-w-xl'>
			<img
				alt='Github avatar image'
				src={stats.avatar}
				className='rounded-full border-8 max-w-[220px] shadow mx-auto
                animate-fade-in-slide-right border-primary-light dark:border-primary-dark'
			/>
			<div className='flex flex-col mx-auto justify-center animate-fade-in-slide-right'>
				<h2>{stats.username}</h2>
				<p>{stats.repos} public repositories</p>
			</div>
			<div
				className='col-span-full rounded-lg shadow flex mx-auto overflow-hidden
                    gap-0.25 w-fit'
			>
				<Button onClick={() => setIndex(0)}>
					<ChartBarIcon size={24} />
				</Button>
				<Button onClick={() => setIndex(1)}>
					<ChartPieSliceIcon size={24} />
				</Button>
			</div>
			{graph[index]}
		</div>
	) : null;
};

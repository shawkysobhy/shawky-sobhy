import anime from 'animejs';
import { useEffect } from 'react';

const WaterDropGrid: React.FC = () => {
	useEffect(() => {
		const element = document.querySelector('.dotgrid') as HTMLElement | null;;
		if (element) {
			element.click();
		}
	}, []);

	return (
		<div className='absolute right-0 top-0 grid place-content-center px-8 py-12 max-w-[80%] z-0'>
			<DotGrid />
		</div>
	);
};

const GRID_WIDTH = 30;
const GRID_HEIGHT = 20;

const DotGrid: React.FC = () => {
	const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
		anime({
			targets: '.dot-point',
			scale: [
				{ value: 1.35, easing: 'easeOutSine', duration: 200 },
				{ value: 1, easing: 'easeInOutQuad', duration: 500 },
			],
			translateY: [
				{ value: -15, easing: 'easeOutSine', duration: 200 },
				{ value: 0, easing: 'easeInOutQuad', duration: 500 },
			],
			opacity: [
				{ value: 1, easing: 'easeOutSine', duration: 200 },
				{ value: 0.5, easing: 'easeInOutQuad', duration: 500 },
			],
			delay: anime.stagger(100, {
				grid: [GRID_WIDTH, GRID_HEIGHT],
				from: Number(e.currentTarget.dataset.index),
			}),
		});
	};

	const dots: JSX.Element[] = [];
	let index = 0;

	for (let i = 0; i < GRID_WIDTH; i++) {
		for (let j = 0; j < GRID_HEIGHT; j++) {
			dots.push(
				<div
					className='group dotgrid rounded-full p-[.8rem] cursor-crosshair transition-all duration-200'
					data-index={index}
					key={`${i}-${j}`}>
					<div
						className='w-4 h-4 rounded-full opacity-50 dot-point bg-gradient-to-b from-white to-background group-hover:from-gray-2000 group-hover:to-brand'
						data-index={index}
						onClick={handleDotClick}
					/>
				</div>
			);
			index++;
		}
	}

	return (
		<div
			style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
			className='grid w-fit'>
			{dots}
		</div>
	);
};

export default WaterDropGrid;

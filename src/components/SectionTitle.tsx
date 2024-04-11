function SectionTitle({ direction, title, fontsize }) {
	return (
		<div
			className={`flex  mb-[2.4rem] items-center ${
				direction == 'row'
					? 'row'
					: direction == 'row-reverse'
					? 'flex-row-reverse'
					: 'row'
			}   gap-[2.2rem] `}>
			<h3 className={`${fontsize ? fontsize : 'text-xl'} font-black `}>
				{title}
				<span className='text-brand'>.</span>
			</h3>
			<div className='flex-grow h-[2px] opacity-30 bg-[#fff]'></div>
		</div>
	);
}

export default SectionTitle;

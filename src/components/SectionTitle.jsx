function SectionTitle({ direction, title }) {
	return (
		<div
			className={`flex  mb-[2.4rem] items-center ${
				direction == 'row'
					? 'row'
					: direction == 'row-reverse'
					? 'flex-row-reverse'
					: 'row'
			}   gap-[2.2rem]`}>
			<h3 className='font-black text-xl'>
				{title}
				<span className='text-brand'>.</span>
			</h3>
			<div className='flex-grow h-[2px] opacity-30 bg-[#fff]'></div>
		</div>
	);
}

export default SectionTitle;

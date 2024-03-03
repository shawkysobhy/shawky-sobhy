function ProjectInfo({project }) {

  const{title,description ,img ,links} =project
	return (
		<div className='max-w-[700px] w-full  rounded-[1.2rem] overflow-hidden bg-backgroundLight text-white'>
			<img
				className='w-full aspect-video'
				src={img}
			/>
			<div className='p-[2.4rem]'>
				<h4 className='text-lg  font-bold py-4'>{title}</h4>
				<div className='pb-6'>
					<h3 className='text-md font-black '>
						Project Links
						<span className='text-brand'>.</span>
					</h3>{' '}
					<div className='flex space-x-4 text-brand cursor-pointer'>
						<a href={links.src} target='_blank' className='underline-solid'>
							source code
						</a>
						<a href={links.live} target='_blank' className=''>
							live demo
						</a>
					</div>
				</div>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectInfo

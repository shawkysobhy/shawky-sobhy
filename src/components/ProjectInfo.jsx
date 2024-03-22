import { FaChrome } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function ProjectInfo({ project }) {
	const { title, description, img, links } = project;
	return (
		<div className='max-w-[700px] w-full  rounded-[1.2rem] overflow-hidden bg-backgroundLight text-white'>
			<img className='w-full aspect-video' src={img} />
			<div className='p-[2.4rem]'>
				<h4 className='py-4 text-lg font-bold'>{title}</h4>
				<div className='pb-6'>
					<h3 className='font-black text-md '>
						Project Links
						<span className='text-brand'>.</span>
					</h3>{' '}
					<div className='flex flex-wrap space-x-6 cursor-pointer text-brand'>
						<a href={links.src} target='_blank' className='flex items-center '>
							<FaGithub className='mr-2' /> source code
						</a>
						<a href={links.live} target='_blank' className='flex items-center'>
							<FaChrome className='mr-2' /> live demo
						</a>
					</div>
				</div>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectInfo;

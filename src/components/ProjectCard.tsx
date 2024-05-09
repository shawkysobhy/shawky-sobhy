import { useState } from 'react';
import { ProjectInfo, Modal } from './index';
import { FaChrome } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
function ProjectCard({ project }:{project:any}) {
	const [toggle, setToggle] = useState(false);
	const closeModalHandler = () => {
		setToggle(false);
		document.body.style.overflow = 'unset';
	};
	const openModalHandler = () => {
		setToggle(true);

		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
	};
	return (
		<div>
			<div className='bg-backgroundLight cursor-pointer rounded-[.8rem] overflow-hidden aspect-video relative	'>
				<img
					alt='project screenshot'
					onClick={openModalHandler}
					className='absolute bottom-0 w-4/5 transform -translate-x-1/2 overf low-hidden left-1/2 -translate-y-2/5 hover:w-[95%] duration-300'
					src={project.img || 'demoIMg'}
				/>
			</div>
			<div>
				<div className='flex items-center gap-[1.2rem] my-[1.6rem]'>
					<h4
						className='font-bold cursor-pointer text-md text-indigo-50'
						onClick={openModalHandler}>
						{project.title}
					</h4>
					<div className='flex-grow h-[1px] bg-white opacity-30'></div>
					<a
						href={project.links.src}
						target='_blank'
						aria-label='visit project repo on github'>
						<FaGithub className='w-10 h-10 cursor-pointer text-brand hover:text-indigo-800' />
					</a>
					<a
						href={project.links.live}
						target='_blank'
						aria-label='visit project live demo'>
						<FaChrome className='w-10 h-10 cursor-pointer text-brand hover:text-indigo-800 ' />
					</a>
				</div>
				<div className='text-[#eef2ff] font-bold '>
					{project?.tools?.join(' - ')}
				</div>
				<p className='my-2 leading-relaxed font-extralight'>
					{project.description.substring(0, 113)}
					<button
						className='ml-2 font-semibold underline cursor-pointer text-brand'
						onClick={() => openModalHandler()}>
						{'more details '}
					</button>
				</p>
			</div>
			{toggle && (
				<Modal onClose={closeModalHandler}>
					<ProjectInfo project={project} />
				</Modal>
			)}
		</div>
	);
}

export default ProjectCard;

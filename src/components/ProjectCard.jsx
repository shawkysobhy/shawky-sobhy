import { BsBrowserChrome } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa6';
import { useState } from 'react';
import { ProjectInfo, Modal } from './index';
function ProjectCard({ project }) {
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
				onClick={openModalHandler}
					className='w-4/5  absolute overflow-hidden bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2/5 '
					src={project.img}
				/>
			</div>
			<div>
				<div className='flex items-center gap-[1.2rem] my-[1.6rem]'>
					<h4 className='font-bold text-md'>{project.title}</h4>
					<div className='flex-grow h-[1px] bg-white opacity-30'></div>
					<a href='#'>
						<FaGithubAlt className='icon' />
					</a>
					<a>
						<BsBrowserChrome className='icon' />
					</a>
				</div>
				<div className='text-brand '>{project?.tools?.join(' - ')}</div>
				<p className='leading-relaxed my-2 font-extralight'>
					{project.description.substring(0, 113)}
					<button
						className='text-brand underline cursor-pointer'
						onClick={() => openModalHandler()}>
						{'learn more'}
						&gt;
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

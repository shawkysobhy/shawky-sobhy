import { Header } from '../components';
import ProjectCard from '../components/ProjectCard';
import { SiHey } from 'react-icons/si';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { PROJECTS } from '../data/projects';
import { useLayoutEffect, useState } from 'react';
import { Note_Project } from '../data/constant';
import Contact from '../layout/Contact';
import Filter from '../components/Filter';
import { Project, TechStack, tech } from '../models';
import { Link } from 'react-router-dom';
import { GrReturn } from 'react-icons/gr';
function ProjectsPage() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [filterKeyword, setFilterKeyword] = useState<TechStack | 'all'>('all');
	let filterdList;
	if (filterKeyword === 'all') {
		filterdList = PROJECTS;
	} else {
		filterdList = PROJECTS.filter((project: Project) =>
			project?.tools?.includes(filterKeyword)
		);
	}

	return (
		<main className='z-20 h-auto min-h-screen bg-background '>
			<Header />
			<div className='py-[4rem] px-[2rem] max-w-[1280px]     mx-auto	md:py-[7rem] md:px-[5rem] text-white'>
				<div className='flex flex-wrap items-center justify-between mb-12'>
					<h3 className={'font-black text-lg'}>
						All Projects
						<span className='text-brand'>.</span>
					</h3>
					<div className='flex items-center space-x-4'>
						<Link to='/'>
							<BsArrowLeftSquareFill className='w-12 h-12 text-indigo-300 cursor-pointer hover:text-indigo-600' />
						</Link>
						<Filter
							filterKeyword={filterKeyword}
							setFilterKeyword={setFilterKeyword}
							options={[
								{ value: 'all', label: 'all' },
								{ value: tech.React, label: 'React' },
								{ value: tech.ReduxToolkit, label: 'Redux' },
								{ value: tech.Typescript, label: 'Typescript' },
								{ value: tech.Tailwind, label: 'Tailwind' },
								{ value: tech.Javascript, label: 'javascript' },
								{ value: tech.Mui, label: 'Mui' },
							]}
						/>
					</div>
				</div>
				<div className='px-10 py-8 my-20 border-r-4 border-indigo-300 rounded-md bg-darkGray'>
					<p className='leading-loose text-textGray font-titilllium'>
						<SiHey className='w-12 h-12 text-indigo-300' /> {Note_Project}
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
					{filterdList.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<Link
					to='/'
					className=' flex items-center justify-center font-bold py-[1rem] px-[2.4rem]  bg-brand text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
					<GrReturn className='text-lg' /> <p>Go to Home</p>
				</Link>
			</div>
			<Contact />
			<div className='h-[200px] bg-gradient-to-b from-background to-backgroundDark'></div>
		</main>
	);
}

export default ProjectsPage;

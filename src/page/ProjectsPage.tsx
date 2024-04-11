import { Header } from '../components';
import ProjectCard from '../components/ProjectCard';
import { SiHey } from 'react-icons/si';

import { PROJECTS } from '../data/projects';
import { useLayoutEffect, useState } from 'react';
import { Note_Project } from '../data/constant';
import Contact from '../layout/Contact';
import Filter from '../components/Filter';
import { Project, TechStack, tech } from '../models';
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
					</h3>{' '}
					<Filter
						filterKeyword={filterKeyword}
						setFilterKeyword={setFilterKeyword}
						options={[
							// { value: 'all', label: 'all' },
							{ value: tech.React, label: 'React' },
							{ value: tech.ReduxToolkit, label: 'Redux' },
							{ value: tech.Typescript, label: 'Typescript' },
							{ value: tech.Tailwind, label: 'Tailwind' },
							{ value: tech.Javascript, label: 'javascript' },
							{ value: tech.Mui, label: 'Mui' },
						]}
					/>
				</div>
				<div className='px-10 py-8 my-20 border-r-4 border-orange-600 rounded-md bg-darkGray'>
					<p className='leading-loose text-textGray font-titilllium'>
						<SiHey className='w-12 h-12 text-orange-600' /> {Note_Project}
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
					{filterdList.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
			<Contact />
			<div className='h-[200px] bg-gradient-to-b from-background to-backgroundDark'></div>
		</main>
	);
}

export default ProjectsPage;

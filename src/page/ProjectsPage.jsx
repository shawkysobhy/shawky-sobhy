import { Header } from '../components';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { useLayoutEffect, useState } from 'react';
import Contact from '../layout/Contact';
import Filter from '../components/Filter';
function ProjectsPage() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [filterKeyword, setFilterKeyword] = useState('all');

	let filterdList;
	if (filterKeyword == 'all') {
		filterdList = PROJECTS;
	} else {
		filterdList = PROJECTS.filter((project) =>
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
							{ value: 'all', label: 'all' },
							{ value: 'html', label: 'Html' },
							{ value: 'css', label: 'Css' },
							{ value: 'javascript', label: 'javascript' },
							{ value: 'tailwind', label: 'Tailwind' },
							{ value: 'react', label: 'React' },
							{ value: 'redux', label: 'Redux' },
							{ value: 'mui', label: 'Mui' },
						]}
					/>
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

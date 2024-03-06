import { Header, SectionTitle } from '../components';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { useLayoutEffect } from 'react';
import Contact from '../layout/Contact';
function ProjectsPage() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='z-20 h-auto min-h-screen bg-background '>
			<Header />
			<div className='py-[4rem] px-[3rem] max-w-[1280px]     mx-auto	md:py-[7rem] md:px-[5rem] text-white'>
				<div className=''>
					<SectionTitle title={'All  Projects'} fontsize={'text-lg'} />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
					{PROJECTS.map((project) => (
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

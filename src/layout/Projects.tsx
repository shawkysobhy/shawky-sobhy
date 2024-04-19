import { SectionTitle, ProjectCard } from '../components';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
function Projects() {
	return (
		<section data-section id='projects' className='section-wrapper'>
			<SectionTitle direction={'row-reverse'} title={'Projects'} />
			<div className='grid grid-cols-1 md:grid-cols-2  gap-[3.2rem]'>
				{PROJECTS.slice(0, 4).map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
			<div className='flex items-center justify-center w-full py-20'>
				<Link
					target='_blank'
					to='/projects'
					aria-label='visit all project page'
					className='flex items-start justify-center px-6 py-2  text-sm font-semibold  text-white transition-colors duration-200  outline-none cursor-pointer  min-w-[200px] rounded-lg bg-emerald-800 font-titilllium hover:opacity-80'>
					<span>See more</span>
				</Link>
			</div>
		</section>
	);
}
export default Projects;

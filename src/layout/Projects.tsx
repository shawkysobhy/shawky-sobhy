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
					to='/projects'
					aria-label='visit all project page'
					className='px-6  min-w-[160px]  py-2 font-bold bg-brand text-gray-200 w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]   md:px-8  text-[16px] md:text-sm  font-titilllium  duration-200  outline-none cursor-pointer    items-center justify-center  flex'>
					<span className='mx-auto'>See more</span>
				</Link>
			</div>
		</section>
	);
}
export default Projects;

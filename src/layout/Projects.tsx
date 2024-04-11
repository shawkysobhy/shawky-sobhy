import { SectionTitle, ProjectCard } from '../components';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { FaChevronRight } from 'react-icons/fa6';
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
					className=' w-[60%] md:w-[40%]  mx-auto rounded-full px-8 py-4  text-sm font-bold text-white transition-colors duration-200 border  outline-none cursor-pointer bg-emerald-800 font-titilllium tracking-wider border-mintgreen hover:bg-backgroundLight flex items-center justify-center space-x-4 mr-auto'>
					<span>See more</span>
					<div className='flex'>
						<FaChevronRight /> <FaChevronRight />{' '}
					</div>
				</Link>
			</div>
		</section>
	);
}
/**			<div className='py-20 w-ful'>
				<div className='flex flex-col px-6 py-4 space-y-12 border-r-4 border-orange-600 rounded-md bg-darkGray'>
					<p className='leading-loose text-textGray font-note'>
						{Note_Project}
					</p>
				</div>
			</div> */
export default Projects;

import { SectionTitle ,ProjectCard} from '../components';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { Note_Project } from '../data/constant';
import { FaArrowUpRightDots } from 'react-icons/fa6';
function Projects() {
	return (
		<section data-section id='projects' className='section-wrapper'>
			<SectionTitle direction={'row-reverse'} title={'Projects'} />
			<div className='grid grid-cols-1 md:grid-cols-2  gap-[3.2rem]'>
				{PROJECTS.slice(0, 4).map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
			<div className='py-20 w-ful'>
				<div className='flex flex-col px-6 py-4 space-y-12 border-r-4 border-orange-600 rounded-md bg-darkGray'>
					<p className='leading-loose text-textGray font-note'>
						{Note_Project}
					</p>
					<Link to='/projects' className=' max-w-[200px] styled-link'>
						<span>See more</span>
						<FaArrowUpRightDots />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Projects;

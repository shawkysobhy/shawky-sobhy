import { SectionTitle } from '../components';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
function Projects() {
	return (
		<section
			data-section
			id="projects"
			className='section-wrapper'>
			<SectionTitle direction={'row-reverse'} title={'Projects'} />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-[3.2rem]'>
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}

export default Projects;

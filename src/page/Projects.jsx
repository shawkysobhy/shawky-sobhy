import { SectionTitle } from '../components';
import ProjectCard from '../components/ProjectCard';
import { NAVBAR } from '../data/constant';
import useElementVisibility from '../hooks/useElementVisibility';
import { Projects as projectData } from '../data/projects';
function Projects() {
	const { ref } = useElementVisibility(NAVBAR.Projects);
	return (
		<section ref={ref} id={NAVBAR.Projects} className='section-wrapper'>
			<SectionTitle direction={'row-reverse'} title={'Projects'} />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-[3.2rem]'>
				{/* <ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard /> */}
				{projectData.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}

export default Projects;

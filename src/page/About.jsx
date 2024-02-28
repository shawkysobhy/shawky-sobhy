import { HiMiniCommandLine } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SectionTitle, Chips, Social } from '../components';
import { tools, NAVBAR } from '../data/constant';
import useElementVisibility from '../hooks/useElementVisibility';
function About() {
	const { ref } = useElementVisibility(NAVBAR.About);
	return (
		<section ref={ref} id='About' className='section-wrapper'>
			<SectionTitle direction={'row'} title={'About'} />
			<div className='grid grid-cols-1 md900:grid-cols-[minmax(0,1fr)_300px] gap-[3rem]'>
				<div>
					<p className='about font-extralight leading-loose mb-[2.4rem]'>
						Hey, I&apos;m Shawky Sobhy. I&apos;m passionate about web and
						frontend development and love building web applications. I graduated
						with a degree in Computer Science in 2023. I have experience
						contributing to projects and assisting relatives with their
						development needs. Currently, I am actively searching for full-time
						opportunities in the field while based in Egypt
					</p>
					<div className='flex items-center gap-6'>
						<p className='text-brand font-bold flex flex-row items-center gap-4'>
							My Links <FaArrowRightLong />
						</p>
						<Social />
					</div>
				</div>
				<div>
					<div className='flex flex-row items-center mb-[24px]'>
						<HiMiniCommandLine color='#0aff9d' className='terminalIcon' />
						<div>
							<p className='text-[2.2rem] font-bold ml-[.8rem]'>Use at work</p>
						</div>
					</div>
					<div className='flex flex-wrap mb-[4.8rem] gap-[1.2rem]'>
						{tools.map((tool) => (
							<Chips key={tool}>{tool}</Chips>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

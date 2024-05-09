import { HiMiniCommandLine } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SectionTitle, Chips, Social } from '../components';
import { tools } from '../data/constant';
function About() {
	return (
		<section className='section-wrapper' data-section id='about'>
			<SectionTitle direction={'row'} title={'About'} />
			<div className='grid grid-cols-1 md900:grid-cols-[minmax(0,1fr)_300px] gap-[3rem]'>
				<div className='leading-loose font-extralight'>
					<p className='mb-10 about'>
						Hey, I&apos;m Shawky Sobhy. I&apos;m passionate about web and
						frontend development and love building web applications. I graduated
						with a degree in Computer Science in 2023.
					</p>
					<p className='mb-10 about'>
						I have experience contributing to projects and assisting relatives
						with their development needs. Currently, I am actively searching for
						full-time opportunities in the field while based in Egypt
					</p>
					<div className='flex items-center gap-6'>
						<p className='flex flex-row items-center gap-4 font-bold text-brand'>
							My Links <FaArrowRightLong />
						</p>
						<Social />
					</div>
				</div>
				<div>
					<div className='flex flex-row items-center mb-[24px]'>
						<HiMiniCommandLine className='w-12 h-12 text-brand' />
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

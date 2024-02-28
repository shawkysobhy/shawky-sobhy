import { HiMiniCommandLine } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SectionTitle,Chips, Social } from '../components';
import { tools } from '../data/data';
function About() {
	return (
		<section id='About' className='mb-[9.6rem] relative z-10 max-w-[1152px]	p-[9.6rem] m-auto overflow-hidden text-white'>
      <SectionTitle direction={'row'} title={'About'}/>
			<div className='grid  grid-cols-[minmax(0,1fr)_300px] gap-[3rem]'>
				<div>
					<p className='font-extralight leading-loose mb-[2.4rem]'>
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
						<Social/>
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
            {tools.map(tool=><Chips key={tool}>{tool}</Chips>)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

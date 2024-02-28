import WaterDropGrid from '../components/AnmiGrid';
import { NAME, POSITION, BIO } from '../data/data';
function Heading() {
	return (
		<section className='mb-[9.6rem] relative z-10 max-w-[1152px]	p-[9.6rem] m-auto overflow-hidden'>
			<div className='relative z-10 w-fit my-[4.8rem] mx-0'>
				<div className='relative w-fit overflow-hidden text-white'>
					<h1 className='text-2xl font-black'>
						{NAME}
						<span className='text-brand'> . </span>
					</h1>
				</div>
				<div className='relative w-fit overflow-hidden text-white'>
					<h2 className='text-lg mt-[1.6rem] font-extralight'>
						I&apos;m a <span className='text-brand font-bold'>{POSITION}</span>
					</h2>
					<p className='my-[2.4rem] mx-0 max-w-[700px] font-extralight'>
						{BIO}
					</p>
					<button className='bg-brand rounded-md text-background py-[1rem] px-[2.4rem] transition-opacity duration-200 hover:opacity-70 text-sm'>
						Contact Me
					</button>
				</div>
			</div>
			<WaterDropGrid />
		</section>
	);
}

export default Heading;

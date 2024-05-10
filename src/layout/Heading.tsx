import WaterDropGrid from '../components/AnmiGrid';
import { NAME, POSITION, BIO } from '../data/constant';
function Heading() {
	return (
		<section className='section-wrapper '>
			<div className='relative z-10 w-fit my-[4.8rem] mx-0'>
				<div className='relative overflow-hidden text-white w-fit'>
					<h1 className='text-xl font-black md:text-[8rem]  '>
						<span className='custom-text-shadow'>{NAME}</span>
						<span className='text-brand'> . </span>
					</h1>
				</div>
				<div className='relative p-4 overflow-hidden text-white w-fit'>
					<h2 className='text-lg mt-[1.6rem] font-extralight '>
						<span className='text-[#6366f1]'> I&apos;m a </span>
						<span className='font-bold text-indigo-400'>{POSITION}</span>
					</h2>
					<p className='my-[2.4rem] mx-0 max-w-[700px] font-extralight '>
						{BIO}
					</p>
					<a
						href='#contact'
						className=' inline-block py-[1rem] px-[2.4rem] font-medium bg-brand text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
						Contact me
					</a>
				</div>
			</div>
			<WaterDropGrid />
		</section>
	);
}

export default Heading;

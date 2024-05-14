import { IoMdMailOpen } from 'react-icons/io';
function Contact() {
	return (
		<section data-section id='contact' className='mb-0 section-wrapper '>
			<div className='flex flex-col items-center'>
				<p className='text-xl font-black text-center md:text-2xl'>
					Contact <span className='text-brand'>.</span>{' '}
				</p>
				<p className='text-center my-[2.5rem] leading-relaxed	 font-extralight text-brightWhite max-w-[700px]'>
					Shoot me an email if you want to connect! You can also find me on
					<a
						className='font-bold text-brand'
						target='_blank'
						href='https://www.linkedin.com/in/shawky-sobhy/'>
						{' '}
						Linkedin{' '}
					</a>
					or{' '}
					<a className='font-bold text-brand' href='https://wa.me/201503014979'>
						{' '}
						Whatsapp ,{' '}
						<span className='font-semibold tracking-wider'>01503014979 </span>
					</a>
					if that &apos;s more your speed.
				</p>
				<div className='flex items-center gap-4 text-sm font-bold md:text-md '>
					<IoMdMailOpen className='text-brand' /> shawkysobhy98@gmail.com
				</div>
			</div>
		</section>
	);
}

export default Contact;

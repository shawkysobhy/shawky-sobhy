import { NAVBAR } from '../data/constant';
import { IoMdMailOpen } from 'react-icons/io';

import useElementVisibility from '../hooks/useElementVisibility';

function Contact() {
	const { ref } = useElementVisibility(NAVBAR.Contact);

	return (
		<section id={NAVBAR.Contact} ref={ref} className='section-wrapper mb-0'>
			<div className='flex items-center flex-col'>
				<p className='text-center font-black text-xl md:text-2xl'>
					Contact <span className='text-brand'>.</span>{' '}
				</p>
				<p className='text-center my-[2.5rem] leading-relaxed	 font-extralight text-brightWhite max-w-[700px]'>
					Shoot me an email if you want to connect! You can also find me on
					<a
						className='text-brand'
						target='_blank'
						href='https://www.linkedin.com/in/shawky-sobhy/'>
						{' '}
						Linkedin{' '}
					</a>
					or{' '}
					<a className='text-brand' href='https://wa.me/201503014979'>
						{' '}
						Whatsapp ,{' '}
						<span className='font-semibold  tracking-wider'>01503014979 </span>
					</a>
					if that &apos;s more your speed.
				</p>
				<div className='flex items-center font-bold  gap-4 text-sm md:text-md'>
					<IoMdMailOpen /> shawkysobhy98@gmail.com
				</div>
			</div>
		</section>
	);
}

export default Contact;

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoCallSharp } from 'react-icons/io5';
import { CONTACTS } from '../data/contact';
function Social() {
	return (
		<div className='flex space-x-[1.6rem]'>
			<a
				className='iconContainer'
				target='_blank'
				aria-label='my linkedin profile'
				href={CONTACTS.linkedIn}>
				<FaLinkedin className='icon' />
			</a>
			<a
				className='iconContainer'
				target='_blank'
				aria-label='my github profile'
				href={CONTACTS.github}>
				<FaGithub className='icon' />
			</a>
			<a
				className='iconContainer'
				aria-label='contact me with my gmail'
				target='_blank'
				href={`mailto:${CONTACTS.email}`}>
				<IoMail className='icon' />
			</a>
			<a className='iconContainer' href='#contact' aria-label='contact'>
				<IoCallSharp className='icon' />
			</a>
		</div>
	);
}

export default Social;

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoCallSharp } from 'react-icons/io5';
import { CONTACTS } from '../data/contact';
function Social() {
	return (
		<div className='flex space-x-[1.6rem]'>
			<a className='iconContainer' target='_blank' href={CONTACTS.linkedIn}>
				<FaLinkedin className='icon' />
			</a>
			<a className='iconContainer' target='_blank' href={CONTACTS.github}>
				<FaGithub className='icon' />
			</a>
			<a className='iconContainer' target='_blank' href={`mailto:${CONTACTS.email}`}>
				<IoMail className='icon' />
			</a>
			<a className='iconContainer' href='#contact'>
				<IoCallSharp className='icon' />
			</a>
		</div>
	);
}

export default Social;

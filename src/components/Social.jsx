import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoCallSharp } from 'react-icons/io5';

function Social() {
	return (
		<div className='flex space-x-[1.6rem]'>
			<a className='iconContainer'>
				<FaLinkedin className='icon' />
			</a>
			<a className='iconContainer'>
				<FaGithub className='icon' />
			</a>
			<a className='iconContainer'>
				<IoMail className='icon' />
			</a>
			<a className='iconContainer'>
				<IoCallSharp className='icon' />
			</a>
		</div>
	);
}

export default Social;

import { CONTACTS } from '../data/contact';
import Social from './Social';
import { FaGoogleDrive } from 'react-icons/fa';

function Header() {
	return (
		<header className='h-[81px] px-[1rem] sm:px-[3.6rem] flex items-center justify-between sticky top-0 z-20 bg-bgOpaque  text-md backdrop-blur-md'>
			<Social />
			<a href={CONTACTS.ruesme} target='_blank' className='z-20 styled-link'>
				<span>My resume</span> <FaGoogleDrive />
			</a>
		</header>
	);
}

export default Header;

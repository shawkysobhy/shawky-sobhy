import { CONTACTS } from '../data/contact';
import Social from './Social';
import { FaGoogleDrive } from 'react-icons/fa';

function Header() {
	return (
		<header className='h-[81px] px-[1rem] sm:px-[3.6rem] flex items-center justify-between sticky top-0 z-20 bg-bgOpaque  text-md backdrop-blur-md'>
			<Social />
			<a
				href={CONTACTS.ruesme}
				target='_blank'
				className='px-4 py-2  md:px-8  text-[16px] md:text-sm font-semibold font-titilllium text-backgroundLight transition-colors duration-200 border outline-none cursor-pointer bg-brand rounded-md border-mintgreen hover:opacity-80 flex items-center justify-center space-x-4'>
				<span>My resume</span> <FaGoogleDrive />
			</a>
		</header>
	);
}

export default Header;

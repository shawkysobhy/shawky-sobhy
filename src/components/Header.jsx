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
			{/* <Link
				to='/projects'
				className='  max-w-[200px] flex items-center justify-center w-3/5 px-2 py-4 space-x-4  bg-backgroundLight border border-brand  hover:opacity-70'>
				<span className='font-medium '>See More</span>
				<MdLastPage />
			</Link> */}
		</header>
	);
}

export default Header;

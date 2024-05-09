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
				className='px-6 py-2 font-bold bg-brand text-gray-200 w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]   md:px-8  text-[16px] md:text-sm  font-titilllium  duration-200  outline-none cursor-pointer    flex items-center justify-center space-x-4'>
				<span>My resume</span> <FaGoogleDrive />
			</a>
			{/* <button className='px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
					Hover me
				</button> */}
		</header>
	);
}

export default Header;

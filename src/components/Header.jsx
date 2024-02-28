import { CONTACTS } from '../data/contact';
import Social from './Social';
function Header() {
	return (
		<header className='h-[81px] px-[3.6rem] flex items-center justify-between sticky top-0 z-20 bg-bgOpaque  text-md backdrop-blur-md	'>
			<Social />
			<a
				href={CONTACTS.ruesme}
				target='_blank'
				className='outline-none cursor-pointer border-solid text-brand border-brand border-[1px] rounded-md z-20 overflow-hidden transition-colors duration-200 px-[2.3rem] py-[1.2rem] bg-transparent hover:text-backgroundDark hover:bg-brand text-[18px]'>
				My resume
			</a>
		</header>
	);
}

export default Header;

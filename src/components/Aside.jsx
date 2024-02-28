import NavItem from './NavItem';
import { NAVBAR } from '../data/constant';
function Aside() {
	return (
		<nav className='bg-backgroundDark sticky top-0 left-0 z-14 flex flex-col items-center overflow-y-auto h-screen'>
			<span className='w-[45px] h-[45px] flex items-center justify-center bg-background rounded my-[1.8rem] mx-0 text-white font-black text-[2.2rem]'>
				S <span className='text-brand'>.</span>
			</span>
			<NavItem
				to={NAVBAR.About}
				title={'About'}
			/>
			<NavItem
				to={NAVBAR.Projects}
				title={'Projects'}
			/>
			<NavItem
				to={NAVBAR.Certificate}
				title={'Certificate'}
				
			/>
			<NavItem
				to={NAVBAR.Contact}
				title={'Contact'}
			/>
		</nav>
	);
}

export default Aside;

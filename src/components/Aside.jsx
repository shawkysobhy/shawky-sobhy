import NavItem from './NavItem';
import { useState } from 'react';
function Aside() {
	const [activeNav, setActiveNav] = useState(null);
	return (
		<nav className='bg-backgroundDark sticky top-0 left-0 z-14 flex flex-col items-center overflow-y-auto h-screen'>
			<span className='w-[45px] h-[45px] flex items-center justify-center bg-background rounded my-[1.8rem] mx-0 text-white font-black text-[2.2rem]'>
				S <span className='text-brand'>.</span>
			</span>
			<NavItem
				activeNav={activeNav}
				setActiveNav={setActiveNav}
				to='#About'
				title={'About'}
			/>
			<NavItem
				title={'Projects'}
				to='#Projects'
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
			<NavItem
				title={'Certificate'}
				to='#Certificate'
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
			<NavItem
				title={'Contact'}
				to='#Contact'
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>
		</nav>
	);
}

export default Aside;

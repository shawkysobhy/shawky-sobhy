import NavItem from './NavItem';
import { NAVBAR } from '../data/constant';
import { useState, useRef, useEffect } from 'react';
function Aside() {
	const [activeSection, setActiveSection] = useState(null);
	const observer = useRef(null);
	useEffect(() => {
		observer.current = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find(
					(entry) => entry.isIntersecting
				)?.target;
				if (visibleSection) {
					setActiveSection(visibleSection.id);
				}
			},
			{ threshold: 0.4 }
		);
		const sections = document.querySelectorAll('[data-section]');
		sections.forEach((section) => {
			observer.current.observe(section);
		});
		return () => {
			sections.forEach((section) => {
				observer.current.unobserve(section);
			});
		};
	}, []);

	return (
		<nav className='bg-backgroundDark sticky top-0 left-0 z-14 flex flex-col items-center overflow-y-auto h-screen '>
			<a href='/' className='w-[45px] h-[45px] flex items-center justify-center bg-background rounded my-[1.8rem] mx-0 text-white font-black text-[2.2rem] cursor-pointer'>
				S <span className='text-brand'>.</span>
			</a>
			<NavItem
				to={NAVBAR.About}
				title={'About'}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<NavItem
				to={NAVBAR.Projects}
				title={'Projects'}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<NavItem
				to={NAVBAR.Certificate}
				title={'Certificate'}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<NavItem
				to={NAVBAR.Contact}
				title={'Contact'}
				activeSection={activeSection}
				setActiveSection={activeSection}
			/>
		</nav>
	);
}

export default Aside;

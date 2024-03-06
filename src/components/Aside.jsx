import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { useState, useRef, useEffect } from 'react';
function Aside() {
	const [activeSection, setActiveSection] = useState(null);
	const observer = useRef(null);
	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			const visibleSection = entries.find(
				(entry) => entry.isIntersecting
			)?.target;
			if (visibleSection) {
				setActiveSection(visibleSection.id);
			}
		});
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
	console.log(activeSection);

	return (
		<nav className='sticky top-0 left-0 flex-col items-center hidden h-screen overflow-y-auto bg-backgroundDark z-14 mdSmall:flex'>
			<a
				href='/'
				className=' glow-on-hover w-[45px] h-[45px] flex items-center justify-center bg-background rounded my-[1.8rem] mx-0 text-white font-black text-[2.2rem] cursor-pointer'>
				S <span className='text-brand'>.</span>
			</a>
			<NavItem
				to='about'
				title={'About'}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<NavItem
				to='projects'
				title={'Projects'}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<NavItem
				to='certificate'
				title={'Certificate'}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<NavItem
				to='contact'
				title={'Contact'}
				activeSection={activeSection}
				setActiveSection={activeSection}
			/>
		</nav>
	);
}

export default Aside;

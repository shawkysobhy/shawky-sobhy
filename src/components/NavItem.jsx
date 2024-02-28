import { useContext } from 'react';
import { Context } from '../AppContext';
function NavItem({ to, title }) {
	const activeStyle = 'border-brand opacity-100 bg-background';
	const nonActiveStyle = 'border-backgroundDark opacity-50 ';
	const { activeSection ,setActiveSection } = useContext(Context);
	return (
		<a
			href={`#${to}`}
			onClick={() => setActiveSection(title)}
			className={`h-[110px] w-full flex items-center  justify-center shrink-0  transition-all border-r   duration-200 [writing-mode:vertical-lr]  text-white cursor-pointer font-extralight hover:bg-background hover:border-brand hover:opacity-100   ${
				activeSection == to ? activeStyle : nonActiveStyle
			} `}>
			{title}
		</a>
	);
}

export default NavItem;

function NavItem({ to, title,activeSection ,setActiveSection}) {
	const activeStyle = 'border-brand opacity-100 bg-background';
	const nonActiveStyle = 'border-backgroundDark opacity-50 ';
	return (
		<a
			href={`#${to.toLowerCase()}`}
			onClick={() => setActiveSection(title)}
			className={`h-[110px] w-full flex items-center  justify-center shrink-0  transition-all border-r   duration-200 [writing-mode:vertical-lr]  text-white cursor-pointer font-extralight hover:bg-background hover:border-brand hover:opacity-100   ${
				activeSection=== to.toLowerCase() ? activeStyle : nonActiveStyle
			} `}>
			{title}
		</a>
	);
}

export default NavItem;

function Chips({children}) {
  return (
		<span className='text-[1.6rem] py-[.2rem] px-[.8rem] rounded-full bg-backgroundLight cursor-pointer hover:bg-[#064e3b] select-none'>
			{children}
		</span>
	);
}

export default Chips

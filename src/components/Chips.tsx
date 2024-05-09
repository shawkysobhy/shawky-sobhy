function Chips({children}:{children:React.ReactNode}) {
  return (
		<span className='text-[1.6rem] py-[.2rem] px-[.8rem] rounded-full bg-backgroundLight cursor-pointer hover:bg-[#312e81] select-none'>
			{children}
		</span>
	);
}

export default Chips

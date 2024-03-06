const activeButtonStyle = 'bg-indigo-500 text-white';

function Filter({ options }) {
	// const [searchParams, setSearchParams] = useSearchParams();
	// const handleClick = (value) => {
	// 	searchParams.set(filterField, value);
	// 	setSearchParams(searchParams);
	// };
	// const currentActiveButton = searchParams.get(filterField) || options[0].value;
	const currentActiveButton = 'all';

	return (
		<div className='flex justify-start w-full px-8 py-6 space-x-4 overflow-x-auto rounded-lg shadow-md md:py-4 filter sm:w-auto shadow-black bg-backgroundLight'>
			{options.map((option) => {
				return (
					<button
						className={`px-4  text-[16px]  rounded-md  bg-[#1b4332]  transition-all duration-300 ease-in-out   hover:bg-brand hover:text-black 
			
							`}
						key={option.value}
						// onClick={handleClick(option.value)}
					>
						{option.label}
					</button>
				);
			})}
		</div>
	);
}

export default Filter;
/**				//  ${
							// 	option.value == currentActiveButton
							// 		? activeButtonStyle
							// 		: 'text-gray-600 bg-white'
							// } */

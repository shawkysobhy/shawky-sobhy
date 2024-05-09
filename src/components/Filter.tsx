import { TechStack } from '../models';

const activeButtonStyle = 'bg-brand text-background';
interface FilterProps {
	filterKeyword: string;
	setFilterKeyword: React.Dispatch<React.SetStateAction<TechStack | 'all'>>;
	options: { value: TechStack|'all'; label: string }[];
}
function Filter({ options, filterKeyword, setFilterKeyword }: FilterProps) {
	return (
		<div className='flex justify-start w-full px-8 py-6 space-x-4 overflow-x-auto rounded-lg shadow-md md:py-4 filter sm:w-auto shadow-black bg-backgroundLight'>
			{options.map((option) => {
				return (
					<button
						className={`px-4  text-[16px]  rounded-md   transition-all duration-300 ease-in-out   hover:bg-brand hover:text-white
						${filterKeyword === option.value ? activeButtonStyle : 'bg-gray-200 text-indigo-800'} 
							`}
						key={option.value}
						onClick={() => setFilterKeyword(option.value)}>
						{option.label}
					</button>
				);
			})}
		</div>
	);
}

export default Filter;

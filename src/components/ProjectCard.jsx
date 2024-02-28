import { BsBrowserChrome } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa6';
function ProjectCard() {
	return (
		<div>
			<div className='bg-backgroundLight cursor-pointer rounded-[.8rem] overflow-hidden aspect-video relative	'>
				<img
					className='w-4/5  absolute overflow-hidden bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2/5 '
					src='https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg'
				/>
			</div>
			<div>
				<div className='flex items-center gap-[1.2rem] my-[1.6rem]'>
					<h4 className='font-bold text-md'>Canvas Club</h4>
					<div className='flex-grow h-[1px] bg-white opacity-30'></div>
					<a href='#'>
						<FaGithubAlt className='icon' />
					</a>
					<a>
						<BsBrowserChrome className='icon' />
					</a>
				</div>
				<div className='text-brand '>
					{['Flutter', 'MUI', 'Python', 'FastAPI'].join(' - ')}
				</div>
				<p className='leading-relaxed my-2 font-extralight'>
					{'Welcome to PizzaPulse, your go-to web app for ordering delicious pizzas with ease! With PizzaPulse, you can seamlessly select your favorite pizza, provide delivery details, track your order in real-time, and enjoy the convenience of a user-friendly interface. Read on to explore the features, technologies used, and how to get started'.substring(
						0,
						113
					)}
					<span className='text-brand underline cursor-pointer ml-2'>
						{'learn more'}
					&gt;
					</span>
				</p>
			</div>
		</div>
	);
}

export default ProjectCard;

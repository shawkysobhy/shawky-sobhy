import { BiSolidDirections } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<div className='h-auto min-h-screen bg-backgroundDark'>
			<div className=' max-w-[60%] md:p-[3.2rem] mx-auto flex flex-col items-center'>
				<BiSolidDirections className='notfound-icon' />
				<h1 className='text-center text-white text-md md:text-lg'>
					Oops! Lost in the digital wilderness? Let&apos;s steer you back to
					familiar grounds! 🌟
				</h1>
				<Link
					to='/'
					className='font-black text-white bg-[#06975d] hover:bg-brand px-[3rem] py-[1.5rem] m-4 rounded-md'>
					Go to Home
				</Link>
			</div>
		</div>
	);
}

export default NotFoundPage;

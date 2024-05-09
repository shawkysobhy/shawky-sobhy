import { Link } from 'react-router-dom';
import { GrReturn } from 'react-icons/gr';
function NotFoundPage() {
	return (
		<div className='h-auto min-h-screen bg-backgroundDark'>
			<div className=' max-w-[60%] md:p-[3.2rem] mx-auto flex flex-col items-center'>
				<h1 className='text-2xl tracking-widest text-white '>404</h1>
				<h1 className='text-center text-white text-md md:text-lg'>
					Oops! Lost in the digital wilderness? Let&apos;s steer you back to
					familiar grounds!
				</h1>
				<Link
					to='/'
					className=' flex items-center justify-center font-bold py-[1rem] px-[2.4rem]  bg-brand text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
					<GrReturn className='text-xl'/> <p>Go to Home</p>
				</Link>
			</div>
		</div>
	);
}

export default NotFoundPage;

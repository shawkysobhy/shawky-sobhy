import { Link } from 'react-router-dom';
import { GrReturn } from 'react-icons/gr';
function NotFoundPage() {
	return (
		<div className='h-auto min-h-screen bg-backgroundDark'>
			<div className=' max-w-[60%] md:p-[3.2rem] mx-auto flex flex-col items-center'>
				<h1 className='text-2xl tracking-widest text-white '>404</h1>
				<h1 className='text-center text-white text-md md:text-lg'>
					Oops! Lost in the digital wilderness? Let&apos;s steer you back to
					familiar grounds! 🌟
				</h1>
				<Link to='/' className='m-8 styled-link'>
					<GrReturn /> Go to Home
				</Link>
			</div>
		</div>
	);
}

export default NotFoundPage;

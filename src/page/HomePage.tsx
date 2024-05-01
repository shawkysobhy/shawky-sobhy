import {  Header } from '../components';
import About from '../layout/About';
import Projects from '../layout/Projects';
import Certificate from '../layout/Certificate';
import Heading from '../layout/Heading';
import Contact from '../layout/Contact';
export default function HomePage() {
	return (
			<main className='bg-background'>
				<Header />
				<Heading />
				<About />
				<Projects />
				<Certificate />
				<Contact />
				<div className='h-[200px] bg-gradient-to-b from-background to-backgroundDark'></div>
			</main>
	);
}

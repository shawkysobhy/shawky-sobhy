import { Aside, Header } from '../components';
import About from '../layout/About';
import Projects from '../layout/Projects';
import Certificate from '../layout/Certificate';
import Heading from '../layout/Heading';
import Contact from '../layout/Contact';

export default function HomePage() {
	return (
		<div className='relative grid gird-cols-1  mdSmall:grid-cols-[60px_minmax(0,1fr)]'>
			<Aside />
			<main className='bg-background'>
				<Header />
				<Heading />
				<About />
				<Projects />
				<Certificate />
				<Contact />
				<div className='h-[200px] bg-gradient-to-b from-background to-backgroundDark'></div>
			</main>
		</div>
	);
}

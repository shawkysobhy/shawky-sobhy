import { Aside, Header } from './components';
import About from './page/About';
import Projects from './page/Projects';
import Certificate from './page/Certificate';
import Heading from './page/Heading';
import Contact from './page/Contact';
export default function App() {
	return (
		<div className='relative grid grid-cols-[60px_minmax(0,1fr)] '>
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

import About from '../page/About';
import { Header } from './';
import Heading from '../page/Heading';
function Main() {
	return (
		<main className='bg-background'>
			<Header />
			<Heading />
			<About />
		</main>
	);
}

export default Main;

import { Aside, Main } from './components';
export default function App() {
	return (
		<div className='grid grid-cols-[60px_minmax(0,1fr)]'>
			<Aside />
			<Main />
		</div>
	);
}

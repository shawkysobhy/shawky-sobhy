import HomePage from './page/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectsPage from './page/ProjectsPage';
import NotFoundPage from './page/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/projects',
		element: <ProjectsPage />,
		errorElement: <NotFoundPage />,
	},
]);
function App() {
	return (
			<RouterProvider router={router}/>
	);
}

export default App;

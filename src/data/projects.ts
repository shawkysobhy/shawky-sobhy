import { Project, tech } from '../models';

enum ProjectIds {
	Trello101,
	WildHutDashboard,
	HooBank,
	PromptStorm,
	JobMatchMaker,
	PizzaPulse,
	LearningManagementSystem,
	YoutubeClone,
	RestCountriesExplorer,
	ReactQuiz,
	ClipboardLandingPage,
	Calculator,
	LoopstudiosLandingPage,
	fatoorahaDashboard,
	MovieApp,
	Todoapp,
	AdviceGenerator,
	MaptyApp,
	SocialProofSection,
	pigGame,
	subscriptionProductPage,
}
export const PROJECTS: Project[] = [
	{
		id: ProjectIds.HooBank,
		title: 'Bank Landing Page',
		description:
			'A landing page project built with TypeScript, React, and Tailwind CSS. This project showcases various sections and layouts for creating modern and responsive landing pages.',
		tools: [
			tech.React,
			tech.Typescript,
			tech.Tailwind,
		],
		links: {
			src: 'https://github.com/shawkysobhy/hoo-bank-landing-page',
			live: 'https://hoo-bank-intro.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/hoo-bank-landing-page/main/public/screenshot.png',
	},
	{
		id: ProjectIds.Trello101,
		title: 'Trello 101',
		description:
			'Embark on your Trello 101 journey by managing your workspaces and tasks effortlessly. Create, update, or delete boards and columns to organize your tasks into categories. Tasks can be easily created, deleted, or moved between columns, with the flexibility to include subtasks. Your workspace data is securely saved in local storage, ensuring continuity even after closing the app. Customize your experience with dark or light mode, with your preference stored for convenience. The app is designed for compatibility across various screen sizes, providing a seamless user experience. Plus, it gracefully handles user inputs, accounting for potential errors or mistakes during interaction. Start your Trello 101 journey today and streamline your task management process!',
		tools: [
			tech.React,
			tech.Typescript,
			tech.ReduxToolkit,
			tech.Tailwind,
			tech.ReactHookForm,
		],
		links: {
			src: 'https://github.com/shawkysobhy/Trello101',
			live: 'https://trello101.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Trello101/main/public/trello-screenshot.png',
	},
	{
		id: ProjectIds.PromptStorm,
		title: 'Prompt Storm',
		description:
			'Prompts Storm website where share with other strong and creative ai prompt can help you to deal with ai took like chatgpt with all benefits',
		tools: [tech.Next, tech.Tailwind, tech.NextAuth],
		links: {
			src: 'https://github.com/shawkysobhy/Prompt-Storm',
			live: 'https://prompt-storm.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Prompt-Storm/main/public/Screenshot.png',
	},
	{
		id: ProjectIds.WildHutDashboard,
		title: 'WildHut Dashboard',
		description:
			'WildHut Tracker is a robust application designed to streamline the process of checking in and checking out guests visiting cabins. The app not only tracks guest information but also performs calculations and generates statistics graphs for better insights. Authentication ensures that only authorized users can access and manage the data.',
		tools: [tech.React, tech.Tailwind, tech.ReactQuery],
		links: {
			src: 'https://github.com/shawkysobhy/Wild-Hut-Dashboard',
			live: 'https://wild-hut-dashboard.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/Screenshot%20120650.png',
	},
	{
		id: ProjectIds.LearningManagementSystem,
		title: 'Learning Management System',
		description:
			"For our graduation project, I successfully developed a Learning Management System using React.js, MUI, and TypeScript. Together, we created reusable components that enhanced the system's functionality and usability with team memeber",
		tools: [tech.React, tech.Mui, tech.Typescript],
		links: {
			src: 'https://github.com/wagihmohamed/lecture-dashboard',
			live: 'https://lecture-dashboard-ivyyuxfo5-wagihmohamed.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/Screenshot%203253463png.png',
	},
	{
		id: ProjectIds.JobMatchMaker,
		title: 'Job Match Maker',
		description:
			'job mathc maker web app perform all crud operation for job applications and in version02 will have users page and company with auth',
		tools: [tech.React, tech.Tailwind, tech.ReactQuery],
		links: {
			src: 'https://github.com/shawkysobhy/JobMatch-Maker',
			live: 'https://job-match-maker.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/jobmatchmaker.png',
	},
	{
		id: ProjectIds.PizzaPulse,
		title: 'Pizza Pulse',
		description:
			'Welcome to PizzaPulse, your go-to web app for ordering delicious pizzas with ease! With PizzaPulse, you can seamlessly select your favorite pizza, provide delivery details, track your order in real-time, and enjoy the convenience of a user-friendly interface. Read on to explore the features, technologies used, and how to get started',
		tools: [tech.React, tech.ReduxToolkit, tech.Tailwind],
		links: {
			src: 'https://github.com/shawkysobhy/PizzaPulse',
			live: 'https://pizza-pulse.vercel.app/',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/pizza-image.png',
	},
	{
		id: ProjectIds.YoutubeClone,
		title: 'Youtube Clone',
		description:
			'The YouTube Clone Project aims to replicate the core functionality of YouTube, Home feed with recommended videos Search functionality to find videos by title, channel, or keywords Video player for watching videos with playback controls',
		tools: [tech.React, tech.Mui, tech.ReactRouter, tech.RapidApi],
		links: {
			live: 'https://youtube02-shawkysobhy.vercel.app/',
			src: 'https://github.com/shawkysobhy/Youtube-Clone',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/youtube.png',
	},
	{
		id: ProjectIds.RestCountriesExplorer,
		title: 'Rest countries explorer with react',
		description:
			'This is my solution to the REST Countries API with a color theme switcher challenge on Frontend Mentor. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name or border countries.',
		tools: [tech.React, tech.Css],
		links: {
			live: 'https://shawkysobhy.github.io/rest-countries-explorer/',
			src: 'https://github.com/shawkysobhy/rest-countries-explorer',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/tsykcthuxajsgl5zym9y.jpg?token=GHSAT0AAAAAACKLQJR66Z2K5XLV4NZ2GTHGZNGMMLQ',
	},
	{
		id: ProjectIds.ReactQuiz,
		title: 'React Quiz',
		description:
			'A React-based quiz application provides an interactive and engaging platform for users to test their knowledge on various topics. Leveraging the power of React, this app offers a seamless and dynamic user interface,ensuring a responsive and intuitive experience across devices',
		tools: [tech.Typescript, tech.React, tech.Css],
		links: {
			live: 'https://quiz-react-app-azure.vercel.app/',
			src: 'https://github.com/shawkysobhy/Quiz-React-App',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/Screenshot%20120545.png',
	},
	{
		id: ProjectIds.ClipboardLandingPage,

		title: 'Clipboard landing page',
		description:
			'Clipboard Landing page for download Mac & Ios allows you to track and organize everything you copy.',
		tools: [tech.Html, tech.Css],
		links: {
			live: 'https://shawkysobhy.github.io/Clipboard-landing-page/',
			src: 'https://github.com/shawkysobhy/Clipboard-landing-page',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/nem2gkhh4jptjzjb0y2y.jpeg?token=GHSAT0AAAAAACKLQJR6ATCY2SLUXKMYL2ZQZNGMJ4A',
	},
	{
		id: ProjectIds.Calculator,

		title: 'Calculator',
		description: 'Calculator with react  ',
		tools: [tech.React, tech.Css],
		links: {
			live: 'https://shawkysobhy.github.io/calculator-app/',
			src: 'https://github.com/shawkysobhy/calculator-app',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/clac.png',
	},
	{
		id: ProjectIds.LoopstudiosLandingPage,
		title: 'Loopstudios landing page',
		description:
			'small landing using tailwind and pracitse different layout skill',
		tools: [tech.Tailwind, tech.Html],
		links: {
			live: 'https://github.com/shawkysobhy/loop-studio',
			src: 'https://github.com/shawkysobhy/loop-studio',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/loopstudio.png',
	},
	{
		id: ProjectIds.fatoorahaDashboard,
		title: 'fatooraha dashboard',
		description: 'it just ui dashboard as intern task',
		tools: [tech.React, tech.Mui, tech.Typescript],
		links: {
			live: 'https://shawkysobhy.github.io/fatooraha-dashboard-task/',
			src: 'https://github.com/shawkysobhy/fatooraha-dashboard-task',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/fatoorah.png',
	},
	{
		id: ProjectIds.MovieApp,
		title: 'Movie App',
		description:
			'A React-based movie app enhances the user experience by integrating with a movie database API to seamlessly search and retrieve movie information. Utilizing React state management, the app allows users to rate and review movies, storing their preferences locally using browser storage. The dynamic interface ensures a smooth browsing experience',
		tools: [tech.React, tech.Css],
		links: {
			live: 'https://movies-app-woad-ten.vercel.app/',
			src: 'https://github.com/shawkysobhy/Movies-App',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/Portfolio/master/src/assets/project-screenshots/movies.png',
	},
	{
		id: ProjectIds.Todoapp,
		title: 'Todo app',
		description:
			'classic todo app with a few twists! Using Html Css responsive with all screens',
		tools: [tech.Javascript, tech.Html, tech.Css],
		links: {
			live: 'https://shawkysobhy.github.io/Todo-App/',
			src: 'https://github.com/shawkysobhy/Todo-App',
		},
		img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/llcq9eiv3ney5tkxgdtu.jpg',
	},
	{
		id: ProjectIds.AdviceGenerator,
		title: 'Advice Generator',
		description: 'first async code i write with js',
		tools: [tech.Javascript, tech.Css, tech.Html],
		links: {
			live: 'https://shawkysobhy.github.io/advice-generator/',
			src: 'https://github.com/shawkysobhy/advice-generator',
		},
		img: '',
	},
	{
		id: ProjectIds.MaptyApp,
		title: 'Mapty App',
		description: 'using local storge and leaflet map to record activite',
		tools: [tech.Javascript, tech.Css, tech.Html],
		links: {
			live: 'https://shawkysobhy.github.io/Mapty-App/',
			src: 'https://github.com/shawkysobhy/Mapty-App',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/mapty.png',
	},
	{
		id: ProjectIds.SocialProofSection,
		title: 'Social proof section',
		description: 'social proof section as part of page test layout skills',
		tools: [tech.Css, tech.Html],
		links: {
			live: 'https://shawkysobhy.github.io/Social-proof-section/',
			src: 'https://github.com/shawkysobhy/Social-proof-section',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/socialproof.png',
	},
	{
		id: ProjectIds.pigGame,
		title: 'Pig Game',
		description: 'dice game with html css javascript',
		tools: [tech.Javascript, tech.Css, tech.Html],
		links: {
			live: 'https://pig-game-eight-nu.vercel.app/',
			src: 'https://github.com/shawkysobhy/Pig_Game',
		},
		img: '',
	},
	{
		id: ProjectIds.subscriptionProductPage,

		title: 'subscription product page',
		description: 'simple static page represnt newsteller subscription page',
		tools: [tech.Css, tech.Html],
		links: {
			live: 'https://shawkysobhy.github.io/we-are-coming-soon-page/',
			src: 'https://github.com/shawkysobhy/we-are-coming-soon-page',
		},
		img: 'https://raw.githubusercontent.com/shawkysobhy/shawky-sobhy/main/src/assets/projects/subscribation.png',
	},
].sort((a, b) => a.id - b.id);

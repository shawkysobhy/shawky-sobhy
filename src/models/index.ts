export type TechStack =
	| 'Next'
	| 'React'
	| 'Typescript'
	| 'Javascript'
	| 'Redux Toolkit'
	| 'Tailwind'
	| 'Mui'
	| 'diasy ui'
	| 'Css'
	| 'Html'
	| 'Git'
	| 'Github'
	| 'React Query'
	| 'Supabase'
	| 'React Hook Form'
	| 'React Router'
	| 'Rapid Api'
	| 'i18Next'
	| 'NextAuth';

export const tech: {
	[key: string]: TechStack;
} = {
	React: 'React',
	Typescript: 'Typescript',
	Javascript: 'Javascript',
	ReduxToolkit: 'Redux Toolkit',
	Tailwind: 'Tailwind',
	Mui: 'Mui',
	'diasy ui': 'diasy ui',
	Css: 'Css',
	Html: 'Html',
	Git: 'Git',
	Github: 'Github',
	ReactQuery: 'React Query',
	Supabase: 'Supabase',
	ReactHookForm: 'React Hook Form',
	ReactRouter: 'React Router',
	RapidApi: 'Rapid Api',
	Next: 'Next',
	NextAuth: 'NextAuth',
	i18Next: 'i18Next',
};

export interface Project {
	id: number;
	title: string;
	description: string;
	tools: TechStack[];
	links: { src: string; live: string };
	img?: string;
}

// export const PROJECTS: Project[] = [
// 	{
// 		id: 5,
// 		title: 'Trello 101',
// 		description:
// 			'Embark on your Trello 101 journey by managing your workspaces and tasks effortlessly. Create, update, or delete boards and columns to organize your tasks into categories. Tasks can be easily created, deleted, or moved between columns, with the flexibility to include subtasks. Your workspace data is securely saved in local storage, ensuring continuity even after closing the app. Customize your experience with dark or light mode, with your preference stored for convenience. The app is designed for compatibility across various screen sizes, providing a seamless user experience. Plus, it gracefully handles user inputs, accounting for potential errors or mistakes during interaction. Start your Trello 101 journey today and streamline your task management process!',
// 		tools: [
// 			tech.React,
// 			tech.Typescript,
// 			tech.ReduxToolkit,
// 			tech.Tailwind,
// 			tech.ReactHookForm
// 		],
// 		links: {
// 			src: 'https://github.com/shawkysobhy/Trello101',
// 			live: 'https://trello101.vercel.app/',
// 		},
// 		img: 'https://raw.githubusercontent.com/shawkysobhy/Trello101/main/public/trello-screenshot.png',
// 	},
// ];

// export const filterOptions: {
// 	[key: string]: TechStack;
// }[] = [
// 	{ value: 'Next' },
// 	{ value: 'React' },
// 	{ value: 'Typescript' },
// 	{ value: 'Javascript' },
// 	{ value: 'Redux Toolkit' },
// 	{ value: 'Tailwind' },
// 	{ value: 'Mui' },
// 	{ value: 'diasy ui' },
// 	{ value: 'Css' },
// 	{ value: 'Html' },
// 	{ value: 'Git' },
// 	{ value: 'Github' },
// 	{ value: 'React Query' },
// 	{ value: 'Supabase' },
// 	{ value: 'React Hook Form' },
// 	{ value: 'React Router' },
// 	{ value: 'Rapid Api' },
// ];

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			xs: '1.6rem', // 12px
			sm: '1.8rem', // 14px
			md: '2.2rem', // 16px
			lg: '3.6rem', // 18px
			xl: '5.6rem', // 20px
			'2xl': '9.6rem',
		},
		extend: {
			colors: {
				background: '#111',
				brand: '#0aff9d',
				bgOpaque: 'hsla(0,0%,7%,.25)',
				backgroundLight: ' #232323',
				backgroundDark: '#080808',
				white: '#ebecf3',
				icon: '#717175',
				brightWhite: '#fff',
			},
			screens: {
				md900: '900px',
			},
		},
	},
	plugins: [],
};

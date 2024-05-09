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
			fontFamily: {
				note: ['Mali', 'cursive'],
				titilllium: ['Titillium Web', 'sans-serif'],
			},
			colors: {
				background: '#000',
				brand: '#6366f1',
				mintgreen: '#6366f1',
				bgOpaque: 'hsla(0,0%,7%,.25)',
				backgroundLight: ' #232323',
				backgroundDark: '#080808',
				white: '#ebecf3',
				icon: '#717175',
				brightWhite: '#fff',
				textGray: '#9fa2a7',
				darkGray: '#26272b',
			},
			screens: {
				md900: '900px',
				mdSmall: '550px',
			},
		},
	},
	plugins: [],
};

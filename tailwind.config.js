/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			animation: {
				blob: 'blob 9s infinite',
			},
			fontFamily: {
				righteous: ['Righteous', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
				eight: ['Eight', 'sans-serif'],
			},
			colors: {
				translucentyellow: 'rgba(255, 238, 153, 0.2)',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
			},
		},
	},
	plugins: [],
};

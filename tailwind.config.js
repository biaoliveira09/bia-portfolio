import daisyui from 'daisyui';

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
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
				eight: ['Eight', 'sans-serif'],
			},
			colors: {
				translucent: 'rgba(250, 250, 249, 0.3)',
				lesstranslucent: 'rgba(250, 250, 249, 0.7)',
				translucentpink: 'rgba(252, 231, 243, 0.3)',
				translucentviolet: 'rgba(221, 214, 254, 0.4)',
			},
		},
	},
	plugins: [daisyui],
};

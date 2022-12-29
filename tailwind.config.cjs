/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'proj': 'rgba(149, 157, 165, 0.2) 0px 10px 20px',
				'proj-hover': 'rgba(0, 0, 0, 0.24) 0px 4px 8px',
			}
		},
	},
	plugins: [],
}

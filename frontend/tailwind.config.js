/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{html,ts}",
	],
	theme: {
	  extend: {
		colors: {
			  primary:'#D6D8F2',
			  secondary:'#4554AB',
		}, 
		boxShadow: {
			't-md': '0px 0px 5px rgb(0 0 0 / 0.10)',
		}
	  },
	},
	plugins: [],
  }
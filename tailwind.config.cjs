/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderWidth: {
				DEFAULT: "1px",
				0: "0",
				1: "0.5px",
				2: "2px",
				3: "3px",
				4: "4px",
				6: "6px",
				8: "8px",
			},
		},
	},
	plugins: [],
};

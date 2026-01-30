/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    950: '#020617', // Enhancing default slate-950 if needed, or stick to default
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assuming Inter or system default
            }
        },
    },
    plugins: [],
}

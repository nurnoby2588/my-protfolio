/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './app/components/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkThem: '#11001F',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                ovo: ['Ovo', 'serif'],
                'changa-one': ['Changa One', 'sans-serif'],
            },
            boxShadow: {
                black: '0 8px 24px rgba(0,0,0,0.15)',
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'mobile': '360px',
            'tablet': '768px',
            'desktop': '1366px'
        },
        extend: {
            colors: {
                'primary-dark': '#145666',
                'primary': '#1F97B4',
                'primary-light': '#67B8CC',
                'secondary-dark': '#D67300',
                'secondary': '#FF8A00',
                'secondary-light': '#ffa235',
                'neutral-dark': '#262626',
                'neutral': '#666666',
                'neutral-light': '#8f8f8f'
            },
        },
    },
    plugins: [],
}

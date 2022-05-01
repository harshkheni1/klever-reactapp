module.exports = {
    mode: 'jit',
    important: true,
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'nunitosans': 'Nunito Sans, sans-serif',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'surfaceblack': '#1B1B1B',
            'objectwhite': '#F9F9F9',
            'darkblue': '#1B283F',
            'yellow': '#FFEC8A',
            'skyblue': '#2273D1',
            'lightwhite': '#F9F9F9',
            'grey' : '#808080',
        }),
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            'offwhite': '#F5F7FA',
        }),
        textColor: theme => ({
            ...theme('colors'),
            'objectwhite': '#F9F9F9',
            'objectblack': '#1B1B1B',
            'red': '#C5322A',
            'grey' : '#808080',
            'green' : '#00DDC0',
            'yellow': '#FFC400',
        }),
        width: theme => ({
            '2/7': '23%',
            '6/7': '100%',
            '2/8': '30%',
            '7/8': '300%',
        }),
        height: theme => ({
            '100/100': '100%',
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

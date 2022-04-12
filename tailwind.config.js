const colors = require('tailwindcss/colors')
module.exports = {
    purge: {
    enabled: true,
    content:['./*.html', './assets/js/*.js']
    },
    // purge: ['./*.html'],
    darkMode: 'class', 
    theme: {
        extend: {
            colors: {
                purple: {
                    99: '#F5EDFF',
                    100: '#F1E9FF',
                    400: '#481990',
                    450: '#b755ff',
                    500: '#782BF1',
                },
                gray: {
                    100: '#171717',
                    150: '#1C1C1C',
                    200: '#D1D5DB',
                    300: '#B7B7B7',
                    400: '#BFB9B0',
                    500: '#4D4C4F',
                    600: '#B7B1A7',
                    700: '#4F4F4F',
                    800: '#1A1B18',
                    850: '#131516',
                    900: '#282C2E',
                    997: '#242729',
                    998: '#e8e6e3',
                    999: '#232628',
                    1000: '#0F0F11'
                },
                blue: {
                    100: '#2B92F1',
                    99: '#2B3342',
                    700: '#1B2333',
                    800: '#202020',
                    900: '#111225'
                },
                pink: {
                    500: '#F1E9FF',
                    700: '#C92BF1'
                },
                green: '#2BF162'
            },
            container: {
                center: true,
            },
            fontFamily: {
                'spline': ['Spline Sans'],
                'sans': ['Source Sans Pro'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
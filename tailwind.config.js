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
                fuchsia: colors.fuchsia,
                cyan: colors.cyan,
                emerald: colors.emerald,
                teal: colors.teal,
                purple: {
                    100: '#F1E9FF',
                    400: '#481990',
                    450: '#b755ff',
                    500: '#782BF1',
                },
                gray: {
                    200: '#D1D5DB',
                    300: '#B7B7B7',
                    400: '#BFB9B0',
                    500: '#4D4C4F',
                    600: '#B7B1A7',
                    700: '#4F4F4F',
                    800: '#1A1B18',
                    850: '#131516',
                    900: '#424141',
                    1000: '#0F0F11'
                },
                blue: {
                    100: '#2B92F1',
                    99: '#2B3342',
                    700: '#1B2333',
                    800: '#111827',
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
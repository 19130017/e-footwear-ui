module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: true,
    theme: {
        fontFamily: {
            primary: "Open Sans, sans-serif",
        },
        backgroundColor: {
            third: "#ebebeb",
            facebook: "#3b5998",
            black: "#000",
            white: "#fff",
            about: "#e8fbfc"
        },
        borderColor: {
            gray: "#e0e0e0",
        },
        textColor: {
            link: "#0000EE",
            black: "#000000",
            white: "#ffffff",
            gray_shadow: "#ededed",
        },
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
            xxl: "1700px",
        },
        extend: {
            colors: {
                // primary: '#0a0a0a',
                // accent: '#B809C3',
            },
            backgroundImage: {
                'coming-soon': 'url(./assets/images/bg_comingsoon.jpg)',
                'about-slogan': 'url(./assets/images/about.png)',
            },
        },
    },
    plugins: [],
};

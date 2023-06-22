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
        },
        borderColor: {
            gray: "#e0e0e0",
        },
        textColor: {
            link: "#0000EE",
            black: "#000000",
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
        },
        extend: {
            colors: {
                // primary: '#0a0a0a',
                // accent: '#B809C3',
            },
            backgroundImage: {},
        },
    },
    plugins: [],
};

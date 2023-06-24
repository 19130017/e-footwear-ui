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
            "cart-theme": "#f5f5f5",
            about: "#e8fbfc",
            "account-theme": "#3fada8",
            "green-light": "#30a2c4",
            "gray-shadow": "#ccc",
            "order-notify":"#e4e7e9",

        },
        borderColor: {
            gray: "#e0e0e0",
            secondary: "#efefef",
            black: "#000",
        },
        textColor: {
            link: "#0000EE",
            black: "#000000",
            cart_text: "#252a2b",
            gray_shadow: "#ededed",

            white: "#fff",
            "light-black": "rgba(85, 85, 85, 0.8)",
            third: "#333",
            success: "#26aa99",
            danger: "#df4759",
            price:"#82869e",
            "price-sale":"#ff0000",
            "vat-color": "#82869e"

        },
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1536px",
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

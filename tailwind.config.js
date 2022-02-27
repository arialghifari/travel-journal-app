module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            "2xl": { max: "1535px" },
            xl: { max: "1279px" },
            lg: { max: "1023px" },
            md: { max: "767px" },
            sm: { max: "639px" },
        },
        extend: {
            colors: {
                primary: "#FFA621",
                color: "#2E2E2E",
                link: "#B9B9B9",
            },
        },
    },
    plugins: [],
};

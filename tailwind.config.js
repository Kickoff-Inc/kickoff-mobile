/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./App.tsx",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./screens/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#7C3AED", // purple-600
                    dark: "#A78BFA", // purple-400
                },
                background: {
                    light: "#FFFFFF",
                    dark: "#1C1C1E",
                },
                card: {
                    light: "#F3F4F6",
                    dark: "#2C2C2E",
                },
                text: {
                    light: "#111827",
                    dark: "#E5E7EB",
                },
                subtext: {
                    light: "#6B7280",
                    dark: "#9CA3AF",
                },
                border: {
                    light: "#E5E7EB",
                    dark: "#3A3A3C",
                },
            },
        },
    },
    darkMode: "media",
    plugins: [],
};

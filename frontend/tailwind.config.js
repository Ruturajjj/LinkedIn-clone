/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A66C2",
        secondary: "#FFFFFF",
        accent: "#7FC15E",
        neutral: "#000000",
        base100: "#F3F2EF",
        base200: "#FFFFFF",
        base300: "#E7E5E4",
        info: "#5E5E5E",
        success: "#057642",
        warning: "#F5C75D",
        error: "#CC1016",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        linkedin: {
          primary: "#0A66C2",
          secondary: "#FFFFFF",
          accent: "#7FC15E",
          neutral: "#000000",
          "base-100": "#F3F2EF",
          "base-200": "#FFFFFF",
          "base-300": "#E7E5E4",
          info: "#5E5E5E",
          success: "#057642",
          warning: "#F5C75D",
          error: "#CC1016",
        },
      },
      "light", // Optional fallback
      "dark"
    ],
    defaultTheme: "linkedin",
  },
}




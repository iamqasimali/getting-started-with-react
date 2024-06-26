# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Run Vite Command to Create a project 

```
    npm create vite@latest
```

Install TailwindCSS 

```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

Add the following code in index.css

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

```


Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create the Main Component in the Main src directory and sub-components in src/components directory

# Just Pomodoro Lite

Just a simple Pomodoro timer with PWA support

Install on your mobile phone and desktop as a stand-alone app

Roadmap is on [/docs/ROADMAP.md](https://github.com/roycechua/just-pomodoro-lite/docs/ROADMAP.md)

# How to deploy

You can deploy it as you would any React Web App. For my app, I deployed it on Vercel.

Follow the link here for more details: https://vitejs.dev/guide/static-deploy.html

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Generate your own assets

You can use the Vite PWA assets generator here https://vite-pwa-org.netlify.app/assets-generator/cli.html

This is already installed in this repo as a dev dependency

```
npm run generate-pwa-assets
```

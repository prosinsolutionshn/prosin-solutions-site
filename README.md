<div align="center">
  <img src="https://avatars.githubusercontent.com/u/89597261?s=1024&v=4" alt="Grupo Platino Logo" width="120">
</div>

# React project with NextJS

This project is based on Next.js 13 and uses several technologies and tools for its operation and development, such as TailwindCSS, Next-translate, Cypress, pnpm, among others.

[More info Next.js 13](https://nextjs.org/docs)
[More info react](https://react.dev/)

Remember to change the base branch to `next` in the `renovate.json` file.

## Requirements

- Node v20
- pnpm v8

### 🔄 Proceso de Desarrollo

1. **Installation**: Make sure you have pnpm installed. Run `pnpm install` to install all project dependencies.
2. **Development**: You can start the development server with `pnpm dev`. This will start the server in development mode with hot-reloading.
3. **Construction**: To create a production version, use `pnpm build`. This will generate the static files and the optimized JavaScript code.
4. **Tests**: Run the e2e tests with `pnpm test:e2e` to make sure everything works as expected.

## Project Structure

### 📂 Configuration Files

- `next.config.mjs`: Next.js main configuration file.
- `cypress.config.ts`: Configuration file for e2e testing with Cypress.
- `tailwind.config.ts`: TailwindCSS configuration file.
- `postcss.config.js`: Configuration file for PostCSS.
- `tsconfig.json`: TypeScript configuration for the project.
- `cliff.toml`: Configuration file for the `CHANGELOG.md` format.
- `renovate.json`: Renovate configuration for dependency management.
- `pnpm-lock.yaml`: pnpm lockfile to ensure consistency of dependencies.
- `package.json`: Defines the scripts and dependencies of the project.

### 📂 Main Directories

- `app`: It contains the main paths of the application, as well as global styles and layout components.
- `components`: It stores all the components used in the project, organized in subfolders according to their nature and function.
- `lib`: It contains utilities, hooks and types used throughout the project.
- `locales`: Files related to the internationalization and translation of the project with next-translate.
- `public`: Static files such as images and assets to be served by Next.js.
- `__test__`: Contains the e2e tests written with Cypress.

More information about the `components` and `lib` folder structure in the `STRUCTURE.md` file.

### Directory Details

#### `app`

This directory stores the main paths of the application, along with the global styles and layout components.

- `favicon.ico`: Icon of the application displayed in the browser tab.
- `globals.css`: Global application styles.
- `layout.tsx`: Main layout component.
- `page.tsx`: Home page component.

#### `components`

- `pages`: It contains page-specific components.
- `shared`: Shared components that can be used anywhere in the application.
- `styles`: Shared styles and themes.
- `thirdparty`: Third-party components used in the project.

#### `cypress`

- `fixtures`: Stores fixed data used in tests.
- `support`: Support functions and custom commands for testing.

#### `lib`

- `hooks`: Custom React hooks.
- `types`: TypeScript type definitions and interfaces.
- `utils`: General utility functions.

#### `locales`

This directory contains `.json` files for each supported language, organized by pages and components.

### 📄 Additional Files

- `CHANGELOG.md`: Detailed record of changes in each version of the project.
- `README.md`: (This file) Instructions and project details.
- `middleware.ts`: Custom middleware for Next.js.
- `next-env.d.ts`: Next.js types.
- `next-translate.d.ts`: Types for Next-translate.

## Internationalization

This project is configured to support multiple languages thanks to Next-translate. If you want to add a new language:

1. Create a folder with the name of the language to be added to the project.
2. Create a `.json` file with the name of the page to translate along with all its components. For example:

```
├── es
│ ├── home.json
│ └── contact.json
├── en
│ ├── home.json
│ └── contact.json
```

Each file will have the following structure:

```json
{
  "page": {
    "title": "Hello world",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis arcu in tortor tincidunt pulvinar. Fusce tincidunt, ipsum id luctus viverra, arcu elit venenatis libero, ac posuere dui risus convallis urna...."
  },
  "component-name": {
    "title": "Hello world",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis arcu in tortor tincidunt pulvinar. Fusce tincidunt, ipsum id luctus viverra, arcu elit venenatis libero, ac posuere dui risus convallis urna...."
  },
  "second-component-name": {
    "title": "Hello world",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis arcu in tortor tincidunt pulvinar. Fusce tincidunt, ipsum id luctus viverra, arcu elit venenatis libero, ac posuere dui risus convallis urna...."
  }
}
```

Where the key `page` represents all the texts that are directly part of the page and do not come from a component. After that main key, each new key will be the name of the component to which the text belongs.

This will keep the translation files in order and easy to read.

3. Make sure to update the settings in `i18n.js` to include the new language.

## Short summary of the most important technologies used.

### RSC (React Server Components)

This project uses React Server Components, an experimental React technology that allows rendering components on the server. This functionality can be seen in the structure of the `client` and `server` folders within the `components` subfolders.

[Server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
[Cliente components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

#### next-translate

For internationalization, we are using `Next-translate`. You can find the translation files in the `locals` directory. Each language has its own folder, and inside that folder, there are `.json` files organized by pages and components.

[More info](https://github.com/aralroca/next-translate/blob/master/README.md)

#### Cypress

Cypress is an end-to-end testing tool. Cypress tests are located in the `__test__` directory, and Cypress configuration and utilities are in the `cypress` folder.

[More info](https://docs.cypress.io/guides/component-testing/react/overview)

#### TailwindCSS

TailwindCSS is a CSS utility framework. The `tailwind.config.ts` configuration file allows you to customize the styles according to your project needs. In addition, `postcss.config.js` is used to process the CSS.

[More info](https://tailwindcss.com/)

### Use of pnpm

This project uses pnpm as package manager. Make sure you have it installed and use `pnpm install` to install the dependencies.

[More info](https://pnpm.io)

---

For more information on the technologies and tools used, we recommend that you consult the official documentation for each of them.

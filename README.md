# How I Built the NestJS Base Concepts Project

This document describes the step-by-step process I followed to build a minimal NestJS project from scratch, focusing on core concepts and a clean TypeScript setup.

## 1. Project Initialization

- Created a new folder: `nestjs-base-concepts`.
- Ran `npm init -y` to generate a `package.json`.

## 2. Installing Dependencies

- Installed NestJS core packages:
    - `npm install @nestjs/core @nestjs/common @nestjs/platform-express`
- Installed development tools:
    - `npm install -D ts-node nodemon @types/node`

## 3. TypeScript Configuration

- Created a `tsconfig.json` with:
    - `rootDir` as `src`, `outDir` as `dist` (keeps sources and build output organized)
    - `target` set to `ES2020` (modern JS features)
    - `module` and `moduleResolution` set to `nodenext` (for ESM compatibility)
    - `esModuleInterop`, `skipLibCheck`, `forceConsistentCasingInFileNames` for better compatibility and type safety
    - **For NestJS:**
        - `experimentalDecorators: true` (enables decorators, required for NestJS)
        - `emitDecoratorMetadata: true` (enables metadata reflection, required for NestJS DI)

- In `package.json`, set:
    - `"type": "module"` (enables native ES module support in Node.js)

## 4. Project Structure

- Created a `src/` directory and added `index.ts` as the main entry point.
- Wrote a minimal NestJS app:
    - Defined an `AppController` with a single `GET /` route returning "Hello World"
    - Defined an `AppModule` including the controller
    - Bootstrapped the app using `NestFactory.create`

## 5. Development Workflow

- Added a `nodemon.json` to watch `src/` and reload on changes, using `ts-node` in ESM mode via a custom `register.mjs` loader.
- Added scripts to `package.json` for building, running, formatting, and development (`dev` uses nodemon).

## 6. Running the Project

- Used `npm run dev` for development (hot reload with nodemon and ts-node)
- Used `npm run build` and `npm start` for production (compiles to `dist/` and runs with Node.js)

## 7. Example Endpoint

- Implemented a single endpoint:
    - `GET /` → returns `Hello World`

## 8. Summary

This project was built to demonstrate the absolute basics of a NestJS application, focusing on:

- Clean TypeScript setup
- Minimal controller/module structure
- Modern Node.js compatibility
- Simple dev workflow with hot reload

No code generators or Nest CLI were used—everything was set up manually for learning purposes.

## 9. Prettier Formatting

- Added `.prettierrc` with formatting rules (indentation, quotes, line width):
    - Example:
        ```json
        {
            "tabWidth": 4,
            "useTabs": false,
            "semi": false,
            "singleQuote": true,
            "trailingComma": "none",
            "printWidth": 120
        }
        ```
- In `.prettierignore` added folders and files to exclude from formatting (node_modules, dist, min.js, etc).
- To format code: `npm run format`

## 10. .gitignore

- Created `.gitignore` to exclude build artifacts, dependencies, and temp files from the repository:
    - Example content:
        ```
        package-lock.json
        dist
        node_modules
        src/public
        **/*.min.js
        ```

## 11. First Commit and Upload to GitHub

1. Initialize a git repository:
    ```bash
    git init
    git add .
    git commit -m "init: base NestJS project with TypeScript and ESM"
    ```
2. Create a new repository on GitHub:
    - **Using GitHub CLI:**
        ```bash
        gh repo create <your-repo-name> --public --source . --remote=origin --push
        ```

        - If this is your first time using `gh`, you will be prompted to authenticate:
            - Run `gh auth login` and follow the prompts.
            - You may be asked to copy a one-time code and open https://github.com/login/device in your browser to complete authentication.
            - Example prompt:
                ```
                ! First copy your one-time code: XXXX-YYYY
                Press Enter to open https://github.com/login/device in your browser...
                ✓ Authentication complete.
                ```
        - You can specify `--private` instead of `--public` if you want a private repository.
        - This command will create the repo, add the remote, and push your code in one step.
    - **Or via the GitHub website:**
        1. Go to https://github.com/new
        2. Create a new repository (do not initialize with README, .gitignore, or license).
        3. Copy the repo URL and add it as a remote:
            ```bash
            git remote add origin <YOUR-GITHUB-REPO-URL>
            git branch -M main
            git push -u origin main
            ```

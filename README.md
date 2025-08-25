# Cypress

## Install Cypress:

```
npm install -D cypress
```

The `-D` flag is a shorthand for `--save-dev`, and it's used to add the package to the `devDependencies` section of `package.json`. This is commonly used for libraries only needed during development, such as linters, testing frameworks, or build tools.

## Open Cypress - scaffold first test

```
npx cypress open
```

Follow the prompts to generate a blank E2E test. Close that once complete and check the folder structure.

## Run tests

### Via UI

Select E2E and navigate to Specs in the Cypress UI.

### Via cli:

```
npx cypress run --headed
```

Options documented [here](https://docs.cypress.io/app/references/command-line#Options).

### Via script

Add to `package.json`:

```
{
  "scripts": {
    "e2e:chrome": "cypress run --browser chrome"
  }
}
```

Then:

```
npm run e2e:chrome
```
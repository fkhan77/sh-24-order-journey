## Description

A mini order journey created using Next.js, StyledComponents and Formik.

Formatting and pre-commit formatting achieved using Prettier, Husky and lint-staged.

Tested using Jest, react-testing-library and Cypress

## Prerequisites

You will need the following installed globally on your machine

Node Version: 16.13.0

Yarn Version: 1.22.15

## Installation and Usage

`yarn install` - Install dependencies

`yarn dev` - Run the app locally on a dev server at http://localhost:3000

`yarn test` - Run unit tests

`yarn cypress:open` - Run Cypress

Note: In order for Cypress to run properly when using Next, a production version of the application needs to be built and run before running Cypress. Use the following steps to run Cypress correctly.

1. `yarn build`

2. `yarn start`

3. In another terminal window run `yarn cypress:open`
